import axios from 'axios';
import React, { useState,useEffect } from 'react'
// import {Link} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51JrZOwSDF9Y1cUHxPgzaliAls0yW7ZmGkCxgn1jFhWb35jILAFstzxUwQRl9EWdQGwc9TBw1IGGAGel41RnGRLxF00fHL4Yz6X"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) =>{
            setStripeToken(token)
    }
    useEffect(()=>{
        const makeRequest = async ()=>{
            try {
                console.log("Hi")
                const res = await axios.post("http://localhost:5000/api/checkout/payment",{
                    tokenId:stripeToken.id,
                    amount:2000
                }         
                );
                console.log(res.data)

                
            } catch (error) {
                console.log(error)
            }
        }
        stripeToken && makeRequest()

    },[stripeToken])
    return (
        <div>
            <StripeCheckout 
                name="Drippy tribals"
                image="data:image/jpeg;base64,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rT4Ay+ipAaoqKiJyNR7XYn7oYlmPr5kThGY46pmdR61VizudTMf5AdABsB0AE3+KeIKnEmIau+w+FEvsiA7KPXqT1JPpIeBv5Dl37XxNGh0qOit6KT4j8lDH5T6B4tzfDcO0FasoYIV7qkObug8IC8rLsbnZbA8wJwzgrM6eTYyniKtylNarWAuS3duFA9SxAudhea3EefVeIq7V6x3OyID4UToq/wCZ6neEOIc+rcQ1TWrtc7hVHwot/hUeXmeZ6yLiIUll7OLftPC35an/AOW8rUkOH8f+zMVQrE2CVEZj93UA3+EmB23g/IhwZQxdaoRu9WpcdKNPVpB9SNTW+8JwNnNQlm5sSx9ybn9TO2dsHEAwWHGGVvHiLFrdKSm5P4iAvtq8pxKEYJtOlZJwLmWARMRgsXSHeIjeB2UEEXAIKMrWvzPrObSZyPinF5Dth67Kt7lGs6X/AHWuAfVbEwr04kwmMGNKYm74pzTsVK+ItYJpK2A6AcrW+cu1HKuImQ0+9IUjSddSmWsRa2uzNy9bzn2dZ3WzyucRVYd5ZQCg0AafhtY7Ec785P4HtMzHBrpNVKluRqUwzfxKVJ9zcwip4rCtgnem40ujMjDyZSVIv7ieU2MfjHzGo9aoQXdi7EAAEnyA5Ca8KREQEREBERAREQEREBERAREQEREBERAREQEREBB3iIGxjcbUx7aqrs7aVUFuiqAqj2AH8zzJmvEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/2Q=="
                billingAddress
                shippingAddress
                description="Your total is $10"
                amount={1000}
                token={onToken}
                stripeKey={KEY}
            >
                <button>Pay</button> 
            </StripeCheckout>
        </div>
    )
}

export default Pay