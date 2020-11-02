import React, { useEffect, useState } from 'react';
import { useStateValue } from './Components/StateProvider';
import CheckoutProduct from './Components/CheckoutProduct'
import { Link, useHistory } from "react-router-dom";
import './Components/Payment.css'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal} from './Components/reducer';
import CurrencFormat from 'react-currency-format'
import axios from './Components/axios'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();


    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() =>{
        //generate the special stripe secret allows us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    const handleSubmit = async (event) => {
    // do all fancy stripe stupp ...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({ paymentInternet}) => {
        // PaymentIntent = payment confirmation

        setSucceeded(true);
        setError(null);
        setProcessing(false)

        history.replace('/orders')

    })
}
const handleChange = event => {
    // Listen for change in the CardElement
    // and display any errors as the custormer types their card details

    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
}

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items </Link>
                        )
                </h1>
                {/* Payment section - dilivery address */}
                    <div className='payment__section'>
                        <div className='payment_title'>
                            <h3>Delivery Address</h3>
                        </div>
                        <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React lane</p>
                        <p>Los Angelus, CA</p>
                        </div>
                    </div>
                {/* Payment Section - Review Item */}
                     <div className='payment__section'>
                     <div className='payment__title'>
                            <h3>Review Item and Delivery</h3>
                        </div>
                        <div className='payment_items'>
                        {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                        </div>
                    </div>
                {/* Payment section - Payment method */}
                    <div className='payment__section'>
                        <div className='payment__title'>
                            <h3>Payment Method</h3>
                        </div>
                        <div className='payment__details'>
                            {/* Stripe magic will go */}

                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />

                                <div className='payment__priceContainer'>
                                <CurrencFormat
                                    renderText={(value) =>(
                                    <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    />
                                   <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> :
                                    "Buy Now"}</span>
                                       </button> 

                                  </div>

                                       {/* Error  */}
                                    {error && <div>{error}</div>}
                            </form>
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Payment
