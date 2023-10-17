import React, { useEffect, useState } from 'react';
import style from '../styles/cart.module.css'
import removeIcon from '../assets/gallery/icons/cart_module_icons/X.png'
import plusIcon from '../assets/gallery/icons/cart_module_icons/Plus.png'
import minusIcon from '../assets/gallery/icons/cart_module_icons/Minus.png'
import closeIcon from '../assets/gallery/icons/cart_module_icons/icons8-close-30.png'
import { useCart } from '../utils/context';

const Cart = () => {
    const { cartItems, isCartModalOpen, closeCartModal, increaseCount, reduseCount, totalPrice, removeFromCart } = useCart()
    
    
    const [total_price, setTotalPrice] = useState(0)


    

    useEffect(() => {
        setTotalPrice(totalPrice)
    }, [cartItems])
    // const [openModal, setOpenModal] = useState(false)
    // console.log(openModal);

    // useEffect(() => {
    //     setOpenModal(isCartModalOpen)
    // }, [isCartModalOpen])

    // const closeModal = () => {
    //     setOpenModal(false);
    //     console.log('КЛІК!');
    //   };

    return (
        <div className={style.background}>
            {isCartModalOpen && (
                <div className={style.cart_module}>
                    <div className={style.cart_header}>
                        <h2>Shopping Cart</h2>
                        <img src={closeIcon} alt="" onClick={closeCartModal} />
                    </div>
                    <table className={style.cart_table}>
                        <thead>
                            <tr>
                                <th className={style.image}>Product</th>
                                <th className={style.price}>Price</th>
                                <th className={style.count_box}>Quantity</th>
                                <th className={style.total_price}>Total</th>
                                <th className={style.remove}>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr>
                                    <td className={style.img_and_title}>
                                        <img src={item.image} alt="" />
                                        <p>{item.title}</p>
                                    </td>
                                    <td className={style.price}>$ {item.price}</td>
                                    <td className={style.count_box}>
                                        <div className={style.count_box_border}>
                                            <img src={minusIcon} alt="" onClick={() => reduseCount(item.id)} />
                                            <p className={style.count_item}>{item.count}</p>
                                            <img src={plusIcon} alt="" onClick={() => increaseCount(item.id)} />
                                        </div>
                                    </td>
                                    <td className={style.total_price}>$ {item.price * item.count}</td>
                                    <td className={style.remove_icon} onClick={() => removeFromCart(item.id)}>
                                        <img src={removeIcon} alt="remove icon" />
                                    </td>
                                </tr>
                            ))}
                            <div className={style.total_bill}>
                                <h3>Total Bill</h3>
                                <div className={style.bill_box}>
                                    <div className={style.total_amount}>
                                        <p>Total Amount</p>
                                        <p className={style.total_price}>$ {total_price}</p>
                                    </div>
                                    <p className={style.check_btn}>Proceed to Checkout</p>
                                </div>
                            </div>
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
}

export default Cart;
