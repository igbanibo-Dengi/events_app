"use client";

type EventFormProps = {
  userId: String;
  type: "Create" | "Update";
};

const EventForm = ({ userId, type }: EventFormProps) => {
  return <div>EventForm {type}</div>;
};

export default EventForm;
