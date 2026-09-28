import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Sparkles,
  Target,
  Zap,
  TrendingUp,
  Brain,
  Star
} from 'lucide-react';

import {
  recommendations,
  products,
  userProfile
} from '../data/sampleData';

function RecommendationCard({ recommendation }) {
  const product = products.find(
    p => p.id === recommendation.id
  );

  if (!product) return null;

  const methodColors = {
    'Collaborative Filtering': 'from-blue-500 to-blue-600',
    'Content-Based': 'from-purple-500 to-purple-600',
    'Hybrid Model': 'from-primary-500 to-secondary-600'
  };

  return (
    <div className="card p-6 card-hover group">
      <div className="flex flex-col md:flex-row gap-6">

        {/* Product Image */}
        <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Recommendation Score */}
          <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-2 rounded-full font-bold shadow-lg flex items-center gap-1">
            <Star size={16} className="fill-white" />
            {(recommendation.score * 10).toFixed(1)}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-4">

          {/* Product Name & Price */}
          <div>
            <div className="flex items-start justify-between mb-2 gap-4">

              <h3 className="text-2xl font-bold text-slate-800 group-hover:text-primary-600 transition-colors">
                {product.name}
              </h3>

              <span className="text-2xl font-bold text-primary-600 whitespace-nowrap">
                ₹{product.price.toFixed(2)}
              </span>

            </div>

            <p className="text-slate-600">
              {product.description}
            </p>
          </div>

          {/* Recommendation Reason */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-4 rounded-lg">

            <div className="flex items-center gap-2 mb-2">

              <Brain
                className="text-primary-600"
                size={20}
              />

              <span className="font-semibold text-slate-800">
                Why this recommendation?
              </span>

            </div>

            <p className="text-slate-700">
              {recommendation.reason}
            </p>

          </div>

          {/* Method & Stats */}
          <div className="flex flex-wrap items-center gap-4">

            {/* Recommendation Method */}
            <div
              className={`bg-gradient-to-r ${
                methodColors[recommendation.method] ||
                'from-gray-500 to-gray-600'
              } text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2`}
            >
              <Zap size={16} />
              {recommendation.method}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 text-sm">

              <Star
                className="text-yellow-400 fill-yellow-400"
                size={16}
              />

              <span className="font-semibold">
                {product.rating}
              </span>

            </div>

            {/* Purchases */}
            <div className="text-sm text-slate-600">
              {product.purchases.toLocaleString()} purchases
            </div>

            {/* Stock */}
            <div
              className={`text-sm px-3 py-1 rounded-full ${
                product.stock > 300
                  ? 'bg-green-100 text-green-700'
                  : product.stock > 150
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {product.stock} in stock
            </div>

          </div>

          {/* Add To Cart */}
          <button
            className="btn-primary w-full md:w-auto flex items-center justify-center gap-2"
          >
            <Sparkles size={20} />
            Add to Cart
          </button>

        </div>
      </div>

      {/* Confidence Score */}
      <div className="mt-4 pt-4 border-t border-slate-200">

        <div className="flex items-center justify-between mb-2">

          <span className="text-sm font-medium text-slate-600">
            Recommendation Confidence
          </span>

          <span className="text-sm font-bold text-primary-600">
            {(recommendation.score * 100).toFixed(0)}%
          </span>

        </div>

        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">

          <div
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${recommendation.score * 100}%`
            }}
          />

        </div>

      </div>
    </div>
  );
}


function Recommendations() {

  /* Navigation */
  const navigate = useNavigate();

  /* Selected recommendation method */
  const [selectedMethod, setSelectedMethod] = useState('All');

  /* Filter recommendations */
  const filteredRecommendations =
    selectedMethod === 'All'
      ? recommendations
      : recommendations.filter(
          recommendation =>
            recommendation.method === selectedMethod
        );

  return (
    <div className="space-y-8 animate-fade-in">

      {/* ============================= */}
      {/* PAGE HEADER */}
      {/* ============================= */}

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 p-8 text-white">

        <div className="relative z-10">

          <div className="flex items-center gap-3 mb-4">

            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <Sparkles size={32} />
            </div>

            <div>

              <h2 className="text-4xl font-bold">
                Personalized for You
              </h2>

              <p className="text-primary-100 mt-1">
                AI-powered recommendations based on your preferences
              </p>

            </div>

          </div>

        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      </div>


      {/* ============================= */}
      {/* USER PROFILE SUMMARY */}
      {/* ============================= */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Favorite Category */}
        <div className="card p-6 text-center">

          <Target
            className="text-primary-600 mx-auto mb-3"
            size={32}
          />

          <p className="text-sm text-slate-600">
            Favorite Category
          </p>

          <p className="text-xl font-bold text-slate-800">
            {userProfile.favoriteCategory}
          </p>

        </div>


        {/* Total Purchases */}
        <div className="card p-6 text-center">

          <TrendingUp
            className="text-secondary-600 mx-auto mb-3"
            size={32}
          />

          <p className="text-sm text-slate-600">
            Total Purchases
          </p>

          <p className="text-xl font-bold text-slate-800">
            {userProfile.totalPurchases}
          </p>

        </div>


        {/* Total Spent */}
        <div className="card p-6 text-center">

          <Sparkles
            className="text-purple-600 mx-auto mb-3"
            size={32}
          />

          <p className="text-sm text-slate-600">
            Total Spent
          </p>

          <p className="text-xl font-bold text-slate-800">
            ₹{userProfile.totalSpent.toFixed(2)}
          </p>

        </div>


        {/* Member Since */}
        <div className="card p-6 text-center">

          <Brain
            className="text-blue-600 mx-auto mb-3"
            size={32}
          />

          <p className="text-sm text-slate-600">
            Member Since
          </p>

          <p className="text-xl font-bold text-slate-800">

            {new Date(
              userProfile.memberSince
            ).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric'
            })}

          </p>

        </div>

      </div>


      {/* ============================= */}
      {/* HOW AI WORKS */}
      {/* ============================= */}

      <div className="card p-6">

        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">

          <Brain className="text-primary-600" />

          How Our AI Works

        </h3>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


          {/* ============================= */}
          {/* COLLABORATIVE FILTERING */}
          {/* ============================= */}

          <button
            onClick={() =>
              setSelectedMethod('Collaborative Filtering')
            }
            className={`text-left flex gap-3 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
              selectedMethod === 'Collaborative Filtering'
                ? 'bg-blue-50 ring-2 ring-blue-500 shadow-md'
                : 'hover:bg-slate-50'
            }`}
          >

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold flex-shrink-0">
              CF
            </div>

            <div>

              <h4 className="font-semibold text-slate-800">
                Collaborative Filtering
              </h4>

              <p className="text-sm text-slate-600 mt-1">
                Finds products liked by similar users
              </p>

            </div>

          </button>


          {/* ============================= */}
          {/* CONTENT BASED */}
          {/* ============================= */}

          <button
            onClick={() =>
              setSelectedMethod('Content-Based')
            }
            className={`text-left flex gap-3 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
              selectedMethod === 'Content-Based'
                ? 'bg-purple-50 ring-2 ring-purple-500 shadow-md'
                : 'hover:bg-slate-50'
            }`}
          >

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold flex-shrink-0">
              CB
            </div>

            <div>

              <h4 className="font-semibold text-slate-800">
                Content-Based
              </h4>

              <p className="text-sm text-slate-600 mt-1">
                Matches your purchase history patterns
              </p>

            </div>

          </button>


          {/* ============================= */}
          {/* HYBRID MODEL */}
          {/* ============================= */}

          <button
            onClick={() =>
              setSelectedMethod('Hybrid Model')
            }
            className={`text-left flex gap-3 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
              selectedMethod === 'Hybrid Model'
                ? 'bg-primary-50 ring-2 ring-primary-500 shadow-md'
                : 'hover:bg-slate-50'
            }`}
          >

            <div className="bg-gradient-to-br from-primary-500 to-secondary-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold flex-shrink-0">
              HM
            </div>

            <div>

              <h4 className="font-semibold text-slate-800">
                Hybrid Model
              </h4>

              <p className="text-sm text-slate-600 mt-1">
                Combines both approaches for best results
              </p>

            </div>

          </button>

        </div>


        {/* ============================= */}
        {/* SHOW ALL BUTTON */}
        {/* ============================= */}

        {selectedMethod !== 'All' && (

          <div className="mt-4 flex justify-center">

            <button
              onClick={() =>
                setSelectedMethod('All')
              }
              className="px-5 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all"
            >
              Show All Recommendations
            </button>

          </div>

        )}

      </div>


      {/* ============================= */}
      {/* RECOMMENDATIONS LIST */}
      {/* ============================= */}

      <div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">

          <div>

            <h3 className="text-2xl font-bold text-slate-800">

              {selectedMethod === 'All'
                ? `Top ${filteredRecommendations.length} Recommendations for You`
                : `${selectedMethod} Recommendations`
              }

            </h3>


            {selectedMethod !== 'All' && (

              <p className="text-slate-600 mt-1">

                Showing only products recommended using the{' '}

                <strong>
                  {selectedMethod}
                </strong>

                {' '}method.

              </p>

            )}

          </div>


          <div className="bg-slate-100 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700">

            {filteredRecommendations.length} Product
            {filteredRecommendations.length !== 1 ? 's' : ''}

          </div>

        </div>


        {/* ============================= */}
        {/* PRODUCT RESULTS */}
        {/* ============================= */}

        {filteredRecommendations.length > 0 ? (

          <div className="space-y-6">

            {filteredRecommendations.map(
              (rec, index) => (

                <div
                  key={rec.id}
                  className="animate-slide-up"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >

                  <RecommendationCard
                    recommendation={rec}
                  />

                </div>

              )
            )}

          </div>

        ) : (

          /* No Products */
          <div className="card p-10 text-center">

            <div className="text-5xl mb-4">
              🔍
            </div>

            <h3 className="text-xl font-bold text-slate-800">
              No recommendations found
            </h3>

            <p className="text-slate-600 mt-2">
              There are no products available for this recommendation method.
            </p>

            <button
              onClick={() =>
                setSelectedMethod('All')
              }
              className="btn-primary mt-5"
            >
              Show All Recommendations
            </button>

          </div>

        )}

      </div>


      {/* ============================= */}
      {/* BROWSE ALL PRODUCTS */}
      {/* ============================= */}

      <div className="card p-8 text-center bg-gradient-to-r from-slate-50 to-slate-100">

        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          Want more recommendations?
        </h3>

        <p className="text-slate-600 mb-6">
          Continue shopping to improve our AI's understanding of your preferences
        </p>

        <button
          onClick={() => navigate('/products')}
          className="btn-primary"
        >
          Browse All Products
        </button>

      </div>

    </div>
  );
}

export default Recommendations;