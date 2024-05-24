import Link from 'next/link';

export default function Newsletter() {
  return (
    <div className="bg-base-100">
      <div className="w-11/12 md:w-5/6 lg:w-4/5 mx-auto text-center py-16">
        <span className="badge bg-base-200 text-xs mb-1">Newsletter</span>
        <h1 className="text-4xl font-bold">
          Stay Up-to-Date on the Latest Reviews
        </h1>
        <div>
          <p className="text-sm pt-2 pb-6">
            Get the latest product reviews, buying guides, and comparison charts
            delivered straight to your inbox
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your Email"
              className="input input-bordered input-sm w-full max-w-xs"
            />
            <button className="btn btn-primary ml-2 btn-sm">Subscribe</button>
          </form>
          <p className="text-xs font-medium pt-1">
            We'll never share your email. Read our{' '}
            <Link className="underline" href="#">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
