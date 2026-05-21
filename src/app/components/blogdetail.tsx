
export default async function BlogDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        return <h1>Blog not found</h1>;
    }

    const blog = await res.json();

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-4">
                {blog.title}
            </h1>

            <p className="text-lg text-gray-700">
                {blog.body}
            </p>
        </div>
    );
}