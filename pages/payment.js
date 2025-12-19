import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Payment() {
  const router = useRouter();

  useEffect(() => {
    const booking = localStorage.getItem("booking");
    if (!booking) {
      router.push("/");
      return;
    }

    loadRazorpay(JSON.parse(booking));
  }, []);

  const loadRazorpay = async (booking) => {
    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: booking.total }),
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Stranger Things Screening",
      description: "Ticket Booking",
      order_id: order.id,
      handler: function () {
        localStorage.removeItem("booking");
        alert("Payment Successful!");
        router.push("/");
      },
      theme: { color: "#e50914" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div style={styles.page}>
        <h1>Redirecting to payment...</h1>
      </div>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
