import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: '木子老师资料商城',
  description: '用于售卖低价电子资料的轻量站点',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="container">
          <header className="header">
            <Link href="/">
              <strong>木子老师资料商城</strong>
            </Link>
            <nav className="nav">
              <Link href="/">首页</Link>
              <Link href="/materials">全部资料</Link>
              <Link href="/downloads">已购资料</Link>
              <Link href="/admin">后台</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
