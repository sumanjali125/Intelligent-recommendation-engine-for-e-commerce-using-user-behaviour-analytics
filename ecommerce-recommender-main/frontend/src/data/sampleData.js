// Sample data based on Online Retail Dataset structure
// This data represents real e-commerce transactions

export const products = [
  {
    id: 1,
    name: "White Hanging Heart T-Light Holder",
    category: "Home Decor",
    price: 2.55,
    rating: 4.5,
    stock: 245,
    image: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=400",
    description: "Beautiful white ceramic heart-shaped candle holder",
    purchases: 1847
  },
  {
    id: 2,
    name: "Red Woolly Hottie White Heart",
    category: "Home & Living",
    price: 3.39,
    rating: 4.8,
    stock: 189,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400",
    description: "Cozy red hot water bottle with white heart design",
    purchases: 2134
  },
  {
    id: 3,
    name: "Cream Cupid Hearts Coat Hanger",
    category: "Storage & Organization",
    price: 2.75,
    rating: 4.3,
    stock: 312,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400",
    description: "Vintage-style cream coat hanger with cupid hearts",
    purchases: 1523
  },
  {
    id: 4,
    name: "Knitted Union Flag Hot Water Bottle",
    category: "Home & Living",
    price: 3.75,
    rating: 4.7,
    stock: 156,
    image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=400",
    description: "Union Jack design knitted hot water bottle cover",
    purchases: 1892
  },
  {
    id: 5,
    name: "Red Toadstool LED Night Light",
    category: "Lighting",
    price: 1.65,
    rating: 4.6,
    stock: 428,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400",
    description: "Whimsical red toadstool LED night light for kids",
    purchases: 2456
  },
  {
    id: 6,
    name: "Vintage Metal Heart Decoration",
    category: "Home Decor",
    price: 1.25,
    rating: 4.4,
    stock: 567,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400",
    description: "Rustic metal heart wall decoration",
    purchases: 3124
  },
  {
    id: 7,
    name: "Ceramic Storage Jar with Lid",
    category: "Kitchen & Dining",
    price: 4.95,
    rating: 4.9,
    stock: 234,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400",
    description: "Large ceramic storage jar perfect for kitchen",
    purchases: 1678
  },
  {
    id: 8,
    name: "Jumbo Bag Vintage Doilies",
    category: "Craft Supplies",
    price: 2.10,
    rating: 4.2,
    stock: 389,
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400",
    description: "Assorted vintage doilies for crafting",
    purchases: 892
  },
  {
    id: 9,
    name: "Set of 3 Cake Tins Pantry Design",
    category: "Kitchen & Dining",
    price: 8.95,
    rating: 4.8,
    stock: 178,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400",
    description: "Vintage pantry design cake storage tins",
    purchases: 1234
  },
  {
    id: 10,
    name: "Lunch Bag Red Retrospot",
    category: "Bags & Accessories",
    price: 1.95,
    rating: 4.5,
    stock: 445,
    image: "https://images.unsplash.com/photo-1553830591-2f0331b8f35d?w=400",
    description: "Classic red polka dot insulated lunch bag",
    purchases: 2567
  },
  {
    id: 11,
    name: "Assorted Colour Bird Ornament",
    category: "Home Decor",
    price: 1.69,
    rating: 4.3,
    stock: 512,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400",
    description: "Colorful decorative bird figurines",
    purchases: 1845
  },
  {
    id: 12,
    name: "Pack of 72 Retrospot Cake Cases",
    category: "Kitchen & Dining",
    price: 0.85,
    rating: 4.7,
    stock: 834,
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400",
    description: "Polka dot cupcake cases, set of 72",
    purchases: 3892
  }
];

export const userProfile = {
  id: 17850,
  name: "Sarah Johnson",
  email: "sarah.j@email.com",
  memberSince: "2023-08-15",
  totalPurchases: 28,
  totalSpent: 145.67,
  favoriteCategory: "Home Decor"
};

export const purchaseHistory = [
  {
    id: 101,
    productId: 1,
    productName: "White Hanging Heart T-Light Holder",
    quantity: 6,
    price: 2.55,
    date: "2024-01-15",
    status: "Delivered"
  },
  {
    id: 102,
    productId: 5,
    productName: "Red Toadstool LED Night Light",
    quantity: 2,
    price: 1.65,
    date: "2024-01-18",
    status: "Delivered"
  },
  {
    id: 103,
    productId: 9,
    productName: "Set of 3 Cake Tins Pantry Design",
    quantity: 1,
    price: 8.95,
    date: "2024-01-25",
    status: "Delivered"
  },
  {
    id: 104,
    productId: 12,
    productName: "Pack of 72 Retrospot Cake Cases",
    quantity: 4,
    price: 0.85,
    date: "2024-02-03",
    status: "Delivered"
  },
  {
    id: 105,
    productId: 7,
    productName: "Ceramic Storage Jar with Lid",
    quantity: 2,
    price: 4.95,
    date: "2024-02-10",
    status: "Delivered"
  }
];

export const recommendations = [
  {
    id: 6,
    name: "Vintage Metal Heart Decoration",
    score: 0.94,
    reason: "Based on your love for Home Decor items",
    method: "Collaborative Filtering"
  },
  {
    id: 11,
    name: "Assorted Colour Bird Ornament",
    score: 0.89,
    reason: "Similar to White Hanging Heart T-Light Holder",
    method: "Content-Based"
  },
  {
    id: 3,
    name: "Cream Cupid Hearts Coat Hanger",
    score: 0.86,
    reason: "Popular among similar customers",
    method: "Hybrid Model"
  },
  {
    id: 4,
    name: "Knitted Union Flag Hot Water Bottle",
    score: 0.82,
    reason: "Complements your recent kitchen purchases",
    method: "Collaborative Filtering"
  }
];

export const analyticsData = {
  monthlyRevenue: [
    { month: 'Jan', revenue: 12500, orders: 245 },
    { month: 'Feb', revenue: 15800, orders: 289 },
    { month: 'Mar', revenue: 14200, orders: 267 },
    { month: 'Apr', revenue: 18900, orders: 312 },
    { month: 'May', revenue: 21500, orders: 358 },
    { month: 'Jun', revenue: 19800, orders: 334 }
  ],
  categoryDistribution: [
    { name: 'Home Decor', value: 35, count: 4567 },
    { name: 'Kitchen & Dining', value: 28, count: 3892 },
    { name: 'Home & Living', value: 18, count: 2341 },
    { name: 'Lighting', value: 12, count: 1678 },
    { name: 'Craft Supplies', value: 7, count: 892 }
  ],
  topProducts: [
    { name: 'Retrospot Cake Cases', sales: 3892, revenue: 3308.20 },
    { name: 'Metal Heart Decoration', sales: 3124, revenue: 3905.00 },
    { name: 'LED Night Light', sales: 2456, revenue: 4052.40 },
    { name: 'Lunch Bag Retrospot', sales: 2567, revenue: 5005.65 }
  ]
};

export const dashboardStats = {
  totalUsers: 4372,
  totalProducts: 3843,
  totalRevenue: 892456,
  conversionRate: 3.8,
  averageOrderValue: 38.50,
  recommendationAccuracy: 87.3
};
