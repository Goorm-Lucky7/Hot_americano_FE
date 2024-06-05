import {
  ErrorPage,
  GalleryPage,
  IntroPage,
  LoginPage,
  MainPage,
  PostPage,
  ReviewPage,
  SignupPage,
} from '@/pages';
import MemberInfoPage from '@/pages/memberInfo';
import EditMemberInfoPage from '@/pages/editMemberInfo';

interface RouteInfo {
  path: string;
  Element: () => JSX.Element;
  withNav?: boolean;
  withAuth?: boolean;
}

export const routes: RouteInfo[] = [
  { path: '/', Element: MainPage, withNav: true },
  { path: '/member', Element: MemberInfoPage, withNav: true, withAuth: true },
  { path: '/member/:memberId', Element: MemberInfoPage, withNav: true },
  { path: '/member/edit', Element: EditMemberInfoPage, withNav: true, withAuth: true },
  { path: '/review/:galleryId', Element: ReviewPage, withNav: true, withAuth: true },
  { path: '/post', Element: PostPage, withNav: true, withAuth: true },
  { path: '/gallery/:galleryId', Element: GalleryPage },
  { path: '/intro', Element: IntroPage },
  { path: '/login', Element: LoginPage, withAuth: true },
  { path: '/signup', Element: SignupPage, withAuth: true },
  { path: '*', Element: ErrorPage },
];

// import { lazy } from 'react';

// const MainPage = lazy(() => import('@/pages/main'));
// const UserInfoPage = lazy(() => import('@/pages/userInfo'));
// const EditUserInfoPage = lazy(() => import('@/pages/editUserInfo'));
// const ReviewPage = lazy(() => import('@/pages/review'));
// const PostPage = lazy(() => import('@/pages/post'));
// const GalleryPage = lazy(() => import('@/pages/gallery'));
// const IntroPage = lazy(() => import('@/pages/intro'));
// const LoginPage = lazy(() => import('@/pages/login'));
// const SignupPage = lazy(() => import('@/pages/signup'));
// const ErrorPage = lazy(() => import('@/pages/error'));

// 이게 긍정적인 영향을 미치는지 확인이 안됨...ㄷㄷ
