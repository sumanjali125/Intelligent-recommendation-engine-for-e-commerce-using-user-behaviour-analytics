import { useState } from 'react';
import { Search, Filter, Star, ShoppingBag, TrendingUp } from 'lucide-react';
import { products } from '../data/sampleData';

function ProductCard({ product }) {
  return (
    <div className="card p-4 card-hover group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600">
          ${product.price}
        </div>
        {product.purchases > 2000 && (
          <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <TrendingUp size={12} />
            Hot
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="text-xs text-primary-600 font-semibold">{product.category}</div>
        <h3 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-slate-600 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-400 fill-yellow-400" size={16} />
            <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
          </div>
          <div className="text-xs text-slate-500">
            {product.purchases.toLocaleString()} sold
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className={`text-xs px-2 py-1 rounded-full ${
            product.stock > 300 ? 'bg-green-100 text-green-700' :
            product.stock > 150 ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {product.stock} in stock
          </span>
          <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2">
            <ShoppingBag size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      (searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch(sortBy) {
        case 'popular': return b.purchases - a.purchases;
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return 0;
      }
    });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div>
        <h2 className="text-4xl font-bold text-slate-800">Product Catalog</h2>
        <p className="text-slate-600 mt-2">Browse our collection of {products.length} amazing products</p>
      </div>

      {/* Filters */}
      <div className="card p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-slate-600">
          Showing <span className="font-bold text-slate-800">{filteredProducts.length}</span> products
        </p>
        <div className="flex gap-2">
          {['grid', 'list'].map(view => (
            <button
              key={view}
              className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-all capitalize"
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <div 
            key={product.id} 
            className="animate-scale-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">No products found</h3>
          <p className="text-slate-600">Try adjusting your filters or search terms</p>
        </div>
      )}
    </div>
  );
}

export default Products;
