import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Package, DollarSign, Target, Activity } from 'lucide-react';
import { dashboardStats, analyticsData } from '../data/sampleData';

function StatCard({ title, value, icon: Icon, trend, gradient }) {
  return (
    <div className={`stat-card ${gradient} transform hover:scale-105 transition-all duration-300 animate-scale-in`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-white/80 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold mt-2">{value}</h3>
        </div>
        <div className="bg-white/20 p-3 rounded-lg">
          <Icon size={24} />
        </div>
      </div>
      {trend && (
        <div className="flex items-center gap-1 text-sm">
          <TrendingUp size={16} />
          <span>{trend}</span>
        </div>
      )}
    </div>
  );
}

const COLORS = ['#10b981', '#14b8a6', '#06b6d4', '#3b82f6', '#8b5cf6'];

function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold text-slate-800">Analytics Dashboard</h2>
          <p className="text-slate-600 mt-2">Real-time insights into customer behavior and recommendations</p>
        </div>
        <div className="bg-gradient-to-r from-primary-500 to-secondary-600 text-white px-6 py-3 rounded-xl shadow-lg">
          <p className="text-sm font-medium">System Status</p>
          <p className="text-2xl font-bold">Live ●</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Users"
          value={dashboardStats.totalUsers.toLocaleString()}
          icon={Users}
          trend="+12.5% this month"
          gradient="from-primary-500 to-primary-600"
        />
        <StatCard
          title="Total Products"
          value={dashboardStats.totalProducts.toLocaleString()}
          icon={Package}
          trend="+8.2% this month"
          gradient="from-secondary-500 to-secondary-600"
        />
        <StatCard
          title="Total Revenue"
          value={`$${(dashboardStats.totalRevenue / 1000).toFixed(0)}K`}
          icon={DollarSign}
          trend="+15.3% this month"
          gradient="from-blue-500 to-blue-600"
        />
        <StatCard
          title="Conversion Rate"
          value={`${dashboardStats.conversionRate}%`}
          icon={Target}
          trend="+2.1% this month"
          gradient="from-purple-500 to-purple-600"
        />
        <StatCard
          title="Avg Order Value"
          value={`$${dashboardStats.averageOrderValue}`}
          icon={Activity}
          trend="+5.8% this month"
          gradient="from-pink-500 to-pink-600"
        />
        <StatCard
          title="ML Accuracy"
          value={`${dashboardStats.recommendationAccuracy}%`}
          icon={TrendingUp}
          trend="Improving daily"
          gradient="from-emerald-500 to-emerald-600"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="card p-6 animate-slide-up">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Monthly Revenue & Orders</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData.monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: 'none', 
                  borderRadius: '8px', 
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 5 }}
                activeDot={{ r: 7 }}
              />
              <Line 
                type="monotone" 
                dataKey="orders" 
                stroke="#14b8a6" 
                strokeWidth={3}
                dot={{ fill: '#14b8a6', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-xl font-bold text-slate-800 mb-6">Sales by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={analyticsData.categoryDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} (${value}%)`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {analyticsData.categoryDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Products */}
      <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-xl font-bold text-slate-800 mb-6">Top Performing Products</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={analyticsData.topProducts}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
              }} 
            />
            <Legend />
            <Bar dataKey="sales" fill="#10b981" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Algorithm Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-primary-100 to-primary-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Activity className="text-primary-600" size={32} />
          </div>
          <h4 className="text-lg font-bold text-slate-800">Collaborative Filtering</h4>
          <p className="text-3xl font-bold text-primary-600 mt-2">92.3%</p>
          <p className="text-sm text-slate-600 mt-1">Accuracy Rate</p>
        </div>

        <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="text-secondary-600" size={32} />
          </div>
          <h4 className="text-lg font-bold text-slate-800">Content-Based</h4>
          <p className="text-3xl font-bold text-secondary-600 mt-2">85.7%</p>
          <p className="text-sm text-slate-600 mt-1">Precision@10</p>
        </div>

        <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="text-blue-600" size={32} />
          </div>
          <h4 className="text-lg font-bold text-slate-800">Hybrid Model</h4>
          <p className="text-3xl font-bold text-blue-600 mt-2">89.1%</p>
          <p className="text-sm text-slate-600 mt-1">Overall Score</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
