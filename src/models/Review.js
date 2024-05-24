import mongoose from 'mongoose';

const Review = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    // email: { type: String, required: true, unique: true },
    // isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Review || mongoose.model('Review', Review);
