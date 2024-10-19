import { SidebarProvider, SidebarTrigger } from '../components/shadcn/Sidebar';
import { AppSidebar } from '../components/ui/AppSidebar';
import Providers from '../lib/Providers';
import './global.css';

export const metadata = {
  title: 'NICAA',
  description: 'National Ideal College Alumni Association',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {/* <SidebarProvider>
            <AppSidebar /> */}
          <main>
            {/* <SidebarTrigger /> */}
            {children}
          </main>
          {/* </SidebarProvider> */}
        </body>
      </html>
    </Providers>
  );
}
