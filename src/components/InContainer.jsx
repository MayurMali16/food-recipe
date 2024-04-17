import styles from './incontainer.module.css'

export default function InContainer({children}) {
    return <div  className={styles.inContainer}>
        {children}
    </div>
}