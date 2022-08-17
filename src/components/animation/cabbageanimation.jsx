import styles from './cabbageanimation.module.css';
import cabbage from '../../images/kapusta.png';
import ellipse from '../../images/ellipse.png';

export default function CabbageAnimation() {
  return (
    <>
      <div className={styles.animationbox}>
        <div className={styles.cabb1}>
          <img className={styles.icon} src={cabbage} alt="" />
        </div>
        <div className={styles.ellipse1}>
          <img className={styles.iconElp} src={ellipse} alt="" />
        </div>
      </div>
      <div className={styles.animationbox}>
        <div className={styles.cabb}>
          <img className={styles.icon} src={cabbage} alt="" />
        </div>
        <div className={styles.element}>
          <img className={styles.iconElp} src={ellipse} alt="" />
        </div>
      </div>
    </>
  );
}