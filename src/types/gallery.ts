export type galleryImages = {
  image: string;
  imageTitle: string;
  description: string;
};

export type galleryData = {
  title: string;
  thumbnail: string;
  hasComment: boolean;
  images: galleryImages[];
};

export interface Gallery {
  galleryId: number;
  thumbnail: string;
  title: string;
  startDate: Date;
  endDate: Date | null;
  fee: number;
  hashtags: string[];
}

export interface PageInfo {
  pageIndex: number;
  isDone: boolean;
}

export interface GalleriesData {
  pages: Gallery[];
  pageInfo: PageInfo;
}

export interface GalleryDesc extends Gallery {
  nickname: string;
  profileImage: string;
  reviewAverage: number;
  hasTicket: boolean;
  content: string;
}

export interface FilterType {
  keyword: string;
  category: 'hashtag' | 'author' | 'title';
  sort: 'latest' | 'hot' | 'liked';
  cost: 'all' | 'free' | 'pay';
  display: 'all' | 'upcomming' | 'inprogress' | 'finished';
}

export type CategoryValues = FilterType['category'];
export type DispalyValues = FilterType['display'];
export type SortValues = FilterType['sort'];
export type CostValues = FilterType['cost'];

