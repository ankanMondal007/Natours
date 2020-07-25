/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

// const stripe = Stripe('pk_test_BUkd0ZXAj6m0q0jMyRgBxNns00PPtgvjjr');

const stripe = Stripe('pk_test_51H6uRpIv2hriGa77Gi5foPVYH389L2ADncGcFZXU91q2g7cZCENRLEkipRUbDQdy81IXiXuXNwiafJtWRcBvYu0n00jsUHRDYY');

// const stripe = Stripe('pk_test_51H6uRpIv2hriGa77Gi5foPVYH389L2ADncGcFZXU91q2g7cZCENRLEkipRUbDQdy81IXiXuXNwiafJtWRcBvYu0n00jsUHRDYY');


export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
