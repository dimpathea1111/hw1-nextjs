import Link from "next/link";
import Image from "next/image";

export interface Blog {
  id: number;
  title: string;
  body: string;
}

export default function BlogComponents({ id, title, body }: Blog) {
  return (
    <Link href={`/demo-route/blog/${id}`} className="block p-6">
      <div className="w-96 p-4 border border-gray-300 shadow-lg rounded-xl bg-white dark:bg-slate-700">

        <Image
          className="rounded-lg"
          src="https://target.scene7.com/is/image/Target/GUEST_f0768d02-25b4-43cb-8d62-86466ae985c9"
          alt="image"
          width={400}
          height={250}
        />

        <p className="capitalize text-purple-900 font-semibold my-4 bg-purple-200 w-fit px-3 rounded-lg">
          {body}
        </p>

        <h2 className="text-2xl font-bold my-2 dark:text-white">
          {title}
        </h2>

        <p className="dark:text-gray-400">
          Getting started with Tailwind CSS is easy...
        </p>

        <div className="flex items-center mt-4">
          <Image
            src="https://images.unsplash.com/photo-1624188327913-e0c59aaaa3ae?auto=format&fit=crop&w=200&q=80"
            alt="author"
            width={48}
            height={48}
            className="rounded-full"
          />

          <div className="ml-4">
            <p className="text-lg font-semibold dark:text-white">
              robert chunga
            </p>
            <p className="text-sm text-gray-400">
              Aug 15, 2021 · 16 min read
            </p>
          </div>
        </div>

      </div>
    </Link>
  );
}