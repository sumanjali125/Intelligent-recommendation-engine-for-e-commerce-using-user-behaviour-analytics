import { Package, CheckCircle, Clock, TrendingUp, Calendar } from 'lucide-react';
import { purchaseHistory, userProfile } from '../data/sampleData';

function OrderCard({ order }) {
  const statusConfig = {
    'Delivered': { color: 'bg-green-100 text-green-700', icon: CheckCircle },
    'Processing': { color: 'bg-blue-100 text-blue-700', icon: Clock },
    'Shipped': { color: 'bg-purple-100 text-purple-700', icon: Package }
  };

  const config = statusConfig[order.status] || statusConfig['Processing'];
  const StatusIcon = config.icon;

  return (
    <div className="card p-6 card-hover">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-bold text-slate-800">{order.productName}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.color} flex items-center gap-1`}>
              <StatusIcon size={14} />
              {order.status}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {new Date(order.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
            <span>Order #{order.id}</span>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-slate-600">Quantity: {order.quantity}</p>
          <p className="text-2xl font-bold text-primary-600">${(order.price * order.quantity).toFixed(2)}</p>
        </div>
      </div>

      <div className="flex gap-3 pt-4 border-t border-slate-200">
        <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg font-medium transition-all">
          View Details
        </button>
        <button className="flex-1 btn-primary">
          Buy Again
        </button>
      </div>
    </div>
  );
}

function PurchaseHistory() {
  const totalOrders = purchaseHistory.length;
  const totalSpent = purchaseHistory.reduce((sum, order) => sum + (order.price * order.quantity), 0);
  const avgOrderValue = totalSpent / totalOrders;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div>
        <h2 className="text-4xl font-bold text-slate-800">Purchase History</h2>
        <p className="text-slate-600 mt-2">Track your orders and purchase patterns</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card p-6 text-center hover:shadow-lg transition-all">
          <div className="bg-gradient-to-br from-primary-100 to-primary-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="text-primary-600" size={32} />
          </div>
          <p className="text-sm text-slate-600 mb-1">Total Orders</p>
          <p className="text-3xl font-bold text-slate-800">{totalOrders}</p>
        </div>

        <div className="card p-6 text-center hover:shadow-lg transition-all">
          <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-green-600" size={32} />
          </div>
          <p className="text-sm text-slate-600 mb-1">Delivered</p>
          <p className="text-3xl font-bold text-slate-800">
            {purchaseHistory.filter(o => o.status === 'Delivered').length}
          </p>
        </div>

        <div className="card p-6 text-center hover:shadow-lg transition-all">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="text-blue-600" size={32} />
          </div>
          <p className="text-sm text-slate-600 mb-1">Total Spent</p>
          <p className="text-3xl font-bold text-slate-800">${totalSpent.toFixed(2)}</p>
        </div>

        <div className="card p-6 text-center hover:shadow-lg transition-all">
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="text-purple-600" size={32} />
          </div>
          <p className="text-sm text-slate-600 mb-1">Avg Order Value</p>
          <p className="text-3xl font-bold text-slate-800">${avgOrderValue.toFixed(2)}</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="card p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Order Timeline</h3>
        <div className="space-y-6">
          {purchaseHistory.map((order, index) => (
            <div 
              key={order.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <OrderCard order={order} />
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Shopping Insights</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Favorite Category</span>
              <span className="font-bold text-primary-600">{userProfile.favoriteCategory}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Member Since</span>
              <span className="font-bold text-slate-800">
                {new Date(userProfile.memberSince).toLocaleDateString('en-US', { 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Most Active Month</span>
              <span className="font-bold text-slate-800">February 2024</span>
            </div>
          </div>
        </div>

        <div className="card p-6 bg-gradient-to-br from-primary-500 to-secondary-600 text-white">
          <h3 className="text-xl font-bold mb-4">Loyalty Rewards</h3>
          <div className="space-y-3">
            <p className="text-primary-100">You're close to your next reward!</p>
            <div className="bg-white/20 rounded-full h-3 overflow-hidden">
              <div className="bg-white h-full rounded-full" style={{ width: '75%' }} />
            </div>
            <p className="text-sm">3 more orders to unlock <strong>10% discount</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseHistory;
