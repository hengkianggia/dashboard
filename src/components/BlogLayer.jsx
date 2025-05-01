import { Link } from "react-router-dom";

const BlogLayer = () => {
    return (
        <div className="row gy-4">
            {Array.from({ length: 10 }).map((_, index) => (
                <BlogComponent key={index} />
            ))}
        </div>
    );
};

export default BlogLayer;

export function BlogComponent() {
    return (
        <div className="col-xxl-3 col-lg-4 col-sm-6">
            <div className="card h-100 p-0 radius-12 overflow-hidden">
                <div className="card-body p-0">
                    <Link
                        to="/blog-details"
                        className="w-100 max-h-266-px radius-0 overflow-hidden"
                    >
                        <img
                            src="assets/images/blog/blog5.png"
                            alt="WowDash React Vite"
                            className="w-100 h-100 object-fit-cover"
                        />
                    </Link>
                    <div className="p-20">
                        <h6 className="mb-16">
                            <Link
                                to="/blog-details"
                                className="text-line-2 text-hover-primary-600 text-xl transition-2"
                            >
                                How to hire a right business executive for your company
                            </Link>
                        </h6>
                        <p className="text-line-3 text-neutral-500 mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores
                            explicabo corrupti, fuga necessitatibus fugiat adipisci quidem eveniet
                            enim minus.
                        </p>

                        <div className="d-flex align-items-center gap-6 justify-content-between flex-wrap my-10">
                            <div className="d-flex align-items-center gap-8 text-neutral-500 fw-medium">
                                <i className="ri-chat-3-line" />
                                10 Comments
                            </div>
                            <div className="d-flex align-items-center gap-8 text-neutral-500 fw-medium">
                                <i className="ri-calendar-2-line" />
                                Jan 17, 2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
