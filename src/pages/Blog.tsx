type Post = {
  id: number;
  title: string;
  slug: string;
  cover_image_url: string | null;
  lede: string;
  content_text: string;
  bottom_heading: string | null;
  bottom_content: string | null;
  created_at: string;
};

type BlogPostProps = {
  post: Post;
};

const textToParagraphs = (text: string) => {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line, index) => <p key={index}>{line}</p>);
};

export const BlogPostPage = ({ post }: BlogPostProps) => {
  // Format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="editorial-page">
      <main className="article-main">
        {/* Title */}
        <header className="article-header">
          <div className="article-header-wrapper">
            <h1 className="article-title">{post.title}</h1>
            <div className="article-header-spacer"></div>
            <div className="article-header-logo">
              <img src="/iedc_logo.svg" alt="IEDC Logo" />
            </div>
          </div>
          <div className="article-date">{formatDate(post.created_at)}</div>
        </header>

        {/* Hero Image */}
        {post.cover_image_url && (
          <figure className="article-hero">
            <img
              src={post.cover_image_url}
              alt={post.title}
              className="hero-img"
            />
          </figure>
        )}

        {/* Content */}
        <article className="article-prose">
          {/* Lede paragraph */}
          <p className="lede">{post.lede}</p>

          {/* Main content paragraphs */}
          {textToParagraphs(post.content_text)}
        </article>

        {/* Feature Section */}
        {post.bottom_heading && post.bottom_content && (
          <section className="article-feature">
            <div className="feature-container">
              <div className="feature-marker"></div>
              <h2 className="feature-title">{post.bottom_heading}</h2>
              <div className="feature-content">
                {textToParagraphs(post.bottom_content)}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="page-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/iedc_logo.svg" alt="IEDC Logo" />
          </div>
          <p>© 2025 IEDC Bootcamp CEC</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostPage;
