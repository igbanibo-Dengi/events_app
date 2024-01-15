import React from "react";
import { Button } from "../button";
import { IEvent } from "@/lib/database/models/event.model";

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  const onCheckout = async () => {
    console.log("Checkout");
  };

  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg">
        {event.isFree ? "Get Tickets" : "Buy Tickets"}
      </Button>
    </form>
  );
};

export default Checkout;
