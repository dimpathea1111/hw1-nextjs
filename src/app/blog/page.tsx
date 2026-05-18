
import BlogComponent from "../component/BlocgComponent"
import { blogType } from "../../lib/blog/blog-type"

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