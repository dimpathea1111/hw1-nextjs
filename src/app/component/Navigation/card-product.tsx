import Image from "next/image";

export default function ProductCard() {
  return (
    <section className="p-4">
      <h1 className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white border p-4 shadow-sm hover:shadow-xl transition"
          >
            <div className="relative w-full h-64">
              <Image
                src="https://img01.ztat.net/article/spp-media-p1/9e762708e72b42feb36ad74c1fd42e43/7de8cead74f54eaea0609353e0867a2e.jpg?imwidth=762&filter=packshot"
                alt="product"
                fill
                className="object-contain"
              />
            </div>

            <h1 className="text-xl font-bold mt-4">
              Product {item}
            </h1>

            <p className="text-gray-500 mt-2">
              Modern fashion design with premium quality.
            </p>

            <button className="mt-5 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-5 py-2 rounded-lg hover:opacity-90 transition">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}