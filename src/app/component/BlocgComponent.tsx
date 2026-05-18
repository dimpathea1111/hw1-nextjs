// import Image from "next/image";
// import { blogType } from "@/lib/blog/blog-type";

// export default function BlogComponent({
//   profile,
//   name,
//   position,
// }: blogType) {
//   return (
//     <>
//       <Image
//         src={profile}
//         alt="profile"
//         width={50}
//         height={50}
//         loading="eager"
//       />

//       <hr />
//       <h1>Name: {name}</h1>
//       <h2>Position: {position}</h2>
//     </>
//   );
// }

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
            {/* <p>Profile: {profile}</p> */}
            <p>Name: {name}</p>
            <p>Position: {position}</p>
        </>
    );
}