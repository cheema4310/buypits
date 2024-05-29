import CreateProductForm from '@/components/product/create-product-form';

export default function CreateProduct() {
  return (
    <div className="w-11/12 md:w-5/6 lg:w-4/5 mx-auto">
      <div className="py-16">
        <h1 className="text-4xl font-bold text-center py-4">Create Product</h1>
        <CreateProductForm />
      </div>
    </div>
  );
}
