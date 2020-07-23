import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price}) =>{
    const priceForStripe =price *100;

    const publishableKey = 'pk_test_F4lI0rWS5RiQWwkYBauXlHeA00K3Gk9kFD';

   const  onToken = token =>{
        console.log(token);
        alert('Payment Succcesfull')
    }

    return(
        <StripeCheckout 
        label="Pay Now"
        name="CROWN CLOTHING LTD."
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUx.svg'
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;