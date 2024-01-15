import Navbar from '../Navbar';
import Footer from '../Footer';

export interface LayoutProps  { 
    children: React.ReactNode
 }

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout