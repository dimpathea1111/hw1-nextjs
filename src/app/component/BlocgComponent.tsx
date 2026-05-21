
import { blogType } from "@/lib/blog/blog-type";
import Image from "next/image";

export default function BlogComponent({ profile, name, position }: blogType) {
    return (
        <>
        <Image src={profile} alt=""
            width={50}
            height={50}
            loading="eager"
            />
            <hr />
            <p>Name: {name}</p>
            <p>Position: {position}</p>
        </>
    );
}