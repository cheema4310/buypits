export default function CategoryBanner() {
  return (
    <div className="bg-base-100">
      <div className="w-11/12 md:w-5/6 lg:w-4/5 mx-auto">
        <div className="py-16">
          <h2 className="font-bold">Feature Product Categories</h2>
          <p className="hidden lg:flex">
            Browse our top-reviewed products across a variety of categories
          </p>
          <div className="flex w-4/5 mx-auto">
            <div className="flex-1 border border-black">Laptops</div>
            <div className="flex-1">Cameras</div>
            <div className="flex-1">TVs</div>
            <div className="flex-1">Speaker</div>
            <div className="flex-1">Fitness</div>
          </div>
        </div>
      </div>
    </div>
  );
}
