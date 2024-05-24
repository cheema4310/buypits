export default function TopReviewed() {
  return (
    <div className="w-11/12 md:w-5/6 lg:w-4/5 mx-auto">
      <div>
        <h2>Top Reviewed Products</h2>
        <p>Check out our highest-rated products</p>
        <div>
          <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">
                  View on Amazon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
