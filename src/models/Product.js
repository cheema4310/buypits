import mongoose from 'mongoose';

const Product = mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    affLink: { type: String, required: true },
    price: { type: Number, required: true },
    pros: { type: [String], required: true },
    cons: { type: [String], required: true },
    features: { type: [String], default: [] },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product || mongoose.model('Product', Product);
