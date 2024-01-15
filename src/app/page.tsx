'use client'
import { useEffect, useState } from 'react'
import moment from 'moment';
import Image from 'next/image'
import axios from 'axios'

import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

import styles from "@/style/pages/page.module.scss"
const token = "o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y"

const AwesomeTerminal = () => {
  const [carts, setCarts] = useState<any>([])
  const realtime = moment().format('MMMM Do YYYY, h:mm:ss a');

  let total = 0

  const handleGetCart = async () => {
    await axios
      .get("https://spe-academy.spesolution.com/api/recruitment", { headers: { Authorization: "Bearer " + token } })
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res)
        setCarts(res.data)
      });
  }

  const handleGetTotal = () => {

  }


  useEffect(() => {
    handleGetCart()
  }, [])

  return (
    <>
      <div className={styles.terminalContainer}>
        <p>{realtime}</p>
        <h1>{`< SPE / FRONTEND >`} </h1>
      </div>

      <Navbar />
      <div className={styles.cartContainer}>
        {carts.map((car: any, i: number) => {
          const product = car.product;

          total += product.price

          return (
            <div key={i} className={styles.cartItem}>
              <Image
                width={100}
                height={100}
                src={product.media_url}
                alt={`picture`}
              />

              <div className={styles.descContainer}>
                <p>{product.code}</p>
                <p>{product.name}</p>
                <p>IDR {product.price}</p>
                <p>{car.quantity} In stock</p>
              </div>

              <div className={styles.inputQtyContainer}>
                <input type="nummber" className={styles.input} />
              </div>
              <div className={styles.inputQtyContainer}>
                <p>
                  {product.price}
                </p>
              </div>
            </div>
          )
        })}

      </div>
      <Footer total={total} />
    </>
  )
}

export default AwesomeTerminal