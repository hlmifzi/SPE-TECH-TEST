import styles from "@/style/component/footer.module.scss"

const footer = ({total} : {total: number}) => {
   return (
      <footer className={styles.footer}>
         <p>
            Total
         </p>
         <p>
            IDR {total}
             {/* // waktunya ga cukup buat yang qty */}
         </p>
      </footer>
   )
}

export default footer;