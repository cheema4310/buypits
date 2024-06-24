'use client';
import * as actions from '@/actions';
import { useFormState } from 'react-dom';

export default function CreateArticleForm() {
  const [formState, action] = useFormState(actions.createArticle, {
    message: '',
  });

  return (
    <form className="grid gap-y-2" action={action}>
      <label className="input input-bordered flex items-center gap-2">
        Title
        <input
          type="text"
          name="title"
          className="grow"
          placeholder="Enter the Title"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Category
        <input
          type="text"
          name="category"
          className="grow"
          placeholder="Enter Article Category"
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
      <label className="input input-bordered flex items-center gap-2 h-28">
        Overview
        <textarea
          className="textarea focus:outline-0 focus:border-0 focus:border-l h-full w-full resize-none"
          placeholder="Article Overview"
          name="overview"
        ></textarea>
      </label>

      <label className="input input-bordered flex items-center gap-2">
        Product IDs
        <input
          name="pids"
          className="grow"
          placeholder="Enter IDs (comma-separated)"
        ></input>
      </label>

      <label className="input input-bordered flex items-center gap-2">
        Reviewed
        <input
          type="text"
          name="review"
          className="grow"
          placeholder="Enter Member of the Review-Board"
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
