import styles from '../styles/Home.module.css';
import Button from 'react-bootstrap/Button';

const HamburgerIcon = () => (
    <Button className={styles.hamburger_icon}>
      <span className={styles.hamburger_line}></span>
      <span className={styles.hamburger_line}></span>
      <span className={styles.hamburger_line}></span>
    </Button>
  );
  
  export default HamburgerIcon;