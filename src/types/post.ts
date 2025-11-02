export type Post = {
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