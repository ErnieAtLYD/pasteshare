export interface Paste {
    id: string;
    content: string;
    language: string;
    createdAt: number;
    expiresAt: number | null;
    isPublic: boolean;
  }
  
  export interface PastePreview {
    id: string;
    title: string;
    language: string;
  }