// import BlogComponent from "../component/";
// import { blogType } from "../../lib/blog/blog-type";

// export default function BlogPage() {

//   // Rendering many data with props
//   const blogs: blogType[] = [
//     {
//       profile:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwvLtM_YN_GkQ8mnBmPfalWXgUBdojX3utm5vy6Bgjf03sIRMYIMKKP_oteRQiySv4APNVZlsO9aYalcDWGWKrhEw7tyN6wKJV6BvjDHd&s=10",
//       name: "Chary",
//       position: "Web Server",
//     },
//     {
//       profile:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwvLtM_YN_GkQ8mnBmPfalWXgUBdojX3utm5vy6Bgjf03sIRMYIMKKP_oteRQiySv4APNVZlsO9aYalcDWGWKrhEw7tyN6wKJV6BvjDHd&s=10",
//       name: "Namana",
//       position: "Frontend Developer",
//     },
//   ];

//   return (
//     <div className="container mx-auto grid grid-cols-4 gap-4 p-8">
//       {blogs.map((blog, index) => (
//         <BlogComponent
//           key={index}
//           profile={blog.profile}
//           name={blog.name}
//           position={blog.position}
//         />
//       ))}
//     </div>
//   );
// }


import BlogComponent from "../component/BlocgComponent"
import { blogType } from "../../lib/blog/blog-type"
import { profile } from "console";

export default function BlogPage() {
        const blogs: blogType[] = [
                {
                   profile: "https://avatars.githubusercontent.com/u/105328?v=4",  
                    name: "John Doe",
                    position: "Software Engineer",
                },
                {
                   profile: "https://avatars.githubusercontent.com/u/105328?v=4",  
                    name: "John Doe",
                    position: "Software Engineer",
                },
                {
                   profile: "https://avatars.githubusercontent.com/u/105328?v=4",  
                    name: "John Doe",
                    position: "Software Engineer",
                },
        ];
  return (
        <div className="Container mx-auto grid grid-cols-4 gap-4 p-8">
         {
            blogs?.map(({profile, name, position},_) => (
                <BlogComponent key={_} profile={profile} name={name} position={position} />
            ))

            }
        </div>
  );
}