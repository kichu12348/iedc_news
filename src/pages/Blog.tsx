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
        <div
          className="not-found-credit"
          style={{
            marginTop: 0,
          }}
        >
          <span>Made Wid </span>
          <svg
            className="heart-icon"
            viewBox="0 0 24 24"
            fill="#ff0000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span> by Kichu</span>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostPage;
