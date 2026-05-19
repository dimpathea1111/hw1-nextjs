

export default async function BlogDetail({ id }: { id: string }) {
    const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/posts/${id}`,
        { cache: "no-store" }
    );

    const blog = await res.json();

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
        </div>
    );
}