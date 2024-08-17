export default function Page({
    params,
  }: {
    params: {
      slug: string;
    };
  }) {
      // replace dashes in the slug with spaces because its nicer
    const formatted = params.slug ? params.slug.replace(/-/g, " ") : "Default Slug";
    
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">{formatted}</h1>
      </div>
    );
  }
  