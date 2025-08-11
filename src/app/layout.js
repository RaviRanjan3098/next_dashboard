"use client";
import "../cmp/sidebarCss.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '@/cmp/sidebar';
import Header from '@/cmp/header';
import "../cmp/index.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='container-fluid p-0 m-0'>
          <Header />
          <div className="d-flex childClass">
            <Sidebar />
            <div className="flex-grow-1">
              <main className="p-3">
                {children}
              </main>
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
