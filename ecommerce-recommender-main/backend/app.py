from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Sample data (in production, this would come from a database)
products = [
    {
        "id": 1,
        "name": "White Hanging Heart T-Light Holder",
        "category": "Home Decor",
        "price": 2.55,
        "rating": 4.5,
        "stock": 245,
        "purchases": 1847
    },
    {
        "id": 2,
        "name": "Red Woolly Hottie White Heart",
        "category": "Home & Living",
        "price": 3.39,
        "rating": 4.8,
        "stock": 189,
        "purchases": 2134
    }
]

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "version": "1.0.0"
    })

@app.route('/api/products', methods=['GET'])
def get_products():
    """Get all products"""
    category = request.args.get('category')
    
    filtered_products = products
    if category:
        filtered_products = [p for p in products if p['category'] == category]
    
    return jsonify({
        "success": True,
        "count": len(filtered_products),
        "products": filtered_products
    })

@app.route('/api/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    """Get single product by ID"""
    product = next((p for p in products if p['id'] == product_id), None)
    
    if product:
        return jsonify({
            "success": True,
            "product": product
        })
    else:
        return jsonify({
            "success": False,
            "error": "Product not found"
        }), 404

@app.route('/api/recommendations/<int:user_id>', methods=['GET'])
def get_recommendations(user_id):
    """Get personalized recommendations for a user"""
    # In production, this would use the trained ML model
    # For now, returning mock recommendations
    
    recommendations = [
        {
            "id": 1,
            "score": 0.94,
            "reason": "Based on your love for Home Decor items",
            "method": "Collaborative Filtering"
        },
        {
            "id": 2,
            "score": 0.89,
            "reason": "Similar to your recent purchases",
            "method": "Content-Based"
        }
    ]
    
    return jsonify({
        "success": True,
        "user_id": user_id,
        "recommendations": recommendations,
        "generated_at": datetime.now().isoformat()
    })

@app.route('/api/analytics', methods=['GET'])
def get_analytics():
    """Get dashboard analytics"""
    return jsonify({
        "success": True,
        "stats": {
            "totalUsers": 4372,
            "totalProducts": 3843,
            "totalRevenue": 892456,
            "conversionRate": 3.8,
            "averageOrderValue": 38.50,
            "recommendationAccuracy": 87.3
        }
    })

if __name__ == '__main__':
    print("""
    ╔══════════════════════════════════════════════════════════╗
    ║  SmartCart Recommendation API                            ║
    ║  Running on http://localhost:5000                        ║
    ║                                                          ║
    ║  Available Endpoints:                                    ║
    ║  • GET  /api/health                                      ║
    ║  • GET  /api/products                                    ║
    ║  • GET  /api/products/<id>                              ║
    ║  • GET  /api/recommendations/<user_id>                  ║
    ║  • GET  /api/analytics                                   ║
    ╚══════════════════════════════════════════════════════════╝
    """)
    app.run(debug=True, host='0.0.0.0', port=5000)
