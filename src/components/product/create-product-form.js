'use client';
import * as actions from '@/actions';
import { useFormState } from 'react-dom';

export default function CreateProductForm() {
  const [formState, action] = useFormState(actions.createProduct, {
    message: '',
  });

  return (
    <form className="grid gap-y-2" action={action}>
      <label className="input input-bordered flex items-center gap-2">
        Name
        <input
          type="text"
          name="name"
          className="grow"
          placeholder="Enter Product Name"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Category
        <input
          type="text"
          name="category"
          className="grow"
          placeholder="Enter Product Category"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 h-28">
        Description
        <textarea
          className="textarea focus:outline-0 focus:border-0 focus:border-l h-full w-full resize-none"
          placeholder="Enter Desc"
          name="description"
        ></textarea>
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Image URL
        <input
          type="url"
          name="image"
          className="grow"
          placeholder="Enter Image URL"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Affiliate Link
        <input
          type="url"
          name="affLink"
          className="grow"
          placeholder="Enter Affiliate Link"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Price
        <input
          type="number"
          name="price"
          step="0.01"
          className="grow"
          placeholder="Enter Price"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Pros
        <input
          name="pros"
          className="grow"
          placeholder="Enter Pros (comma-separated)"
        ></input>
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Cons
        <input
          name="cons"
          className="grow"
          placeholder="Enter Cons (comma-separated)"
        ></input>
      </label>
      <label className="input input-bordered flex items-center gap-2 h-28">
        Features
        <textarea
          className="textarea focus:outline-0 focus:border-0 focus:border-l h-full w-full resize-none"
          placeholder="Enter Product Features (comma-separated)"
          name="features"
        ></textarea>
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Rating
        <input
          type="number"
          name="rating"
          step="0.1"
          max="5"
          className="grow"
          placeholder="Enter Rating (0-5)"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Optional
        <input
          type="text"
          name="passcode"
          className="grow"
          placeholder="Enter UUID"
        />
      </label>
      <p>{formState.message}</p>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
}
