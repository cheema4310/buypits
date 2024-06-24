import CreateArticleForm from '@/components/article/create-article-form';

export default function CreateArticle() {
  return (
    <div className="w-11/12 md:w-5/6 lg:w-4/5 mx-auto">
      <div className="py-16">
        <h1 className="text-4xl font-bold text-center py-4">Create Article</h1>
        <CreateArticleForm />
      </div>
    </div>
  );
}
