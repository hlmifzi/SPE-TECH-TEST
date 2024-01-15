'use client';
import { useRouter } from 'next/navigation';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import styles from "@/style/component/navbar.module.scss"

const Navbar = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/")
  }
  return (
    <nav className={styles.nav}>
    <ol>
      <li>
        PRODUCT
      </li>
      <li>
        QUANTITY
      </li>
      <li>
        SUBTOTAL
      </li>
    </ol>
  </nav>
  )
}

export default Navbar
