/*
  This is the test object you asked for, formatted to match your 'schema.sql' file.
  The content is plain text, using newlines (\n) to separate paragraphs.
*/

// This 'type' matches the database schema with explicit fields
export type Post = {
    id: number;
    title: string;
    slug: string;
    cover_image_url: string | null;
    lede: string;  // First paragraph (emphasized)
    content_text: string;  // Main article body
    bottom_heading: string | null;  // Heading for bottom section
    bottom_content: string | null;  // Bottom section paragraphs
    created_at: string;
};

// Test post with explicit data structure
export const testPost: Post = {
    id: 1,
    title: "NVIDIA Becomes World's First $5 Trillion Company",
    slug: "nvidia-becomes-worlds-first-5-trillion-company",
    created_at: "2025-10-29T12:00:00Z",
    
    cover_image_url: "https://placehold.co/400x220/76B900/FFFFFF?text=NVIDIA",

    // Lede paragraph (emphasized first paragraph)
    lede: "In a groundbreaking milestone, Nvidia Corporation has officially become the first company ever to surpass a $5 trillion market capitalization, reaching $5.04 trillion on October 29, 2025. Fueled by the booming demand for its AI hardware, including the powerful Blackwell and Rubin GPUs, Nvidia's shares soared past $210.",

    // Main content (remaining paragraphs)
    content_text: `The company's stellar growth now places its market value ahead of the GDP of nearly every nation, second only to the U.S. and China. The AI revolution just found its undisputed leader.

This remarkable achievement underscores Nvidia's unmatched influence in the fields of artificial intelligence and semiconductor technology. Its GPUs now serve as the foundation for AI advancements across industries, from cloud computing and healthcare to robotics and autonomous systems.`,
    
    // Bottom section heading
    bottom_heading: "What makes this success even more inspiring is Nvidia's humble beginning.",

    // Bottom section content
    bottom_content: `Founded in 1993 by Jensen Huang, Chris Malachowsky, and Curtis Priem, the company started as a small startup focused on revolutionizing computer graphics. From developing gaming GPUs in a modest setup to leading the world's AI transformation, Nvidia's journey is a testament to vision, innovation, and perseverance.

With innovation at its core, Nvidia continues to redefine the boundaries of computing and intelligence. The $5 trillion milestone is more than just a number; it marks a new era where AI-driven technology stands at the heart of global progress and transformation.`
};
