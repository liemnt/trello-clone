import React, { useState } from "react";
import { NewItemForm } from "./NewItemForm";
import { AddItemButton } from "./styles";

interface AddNewItemProps {
  toggleButtonText: string;
  dark?: boolean;

  onAdd(text: string): void;
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText } = props;
  if (showForm) {
    return (
      <NewItemForm
        onAdd={text => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <AddItemButton dark onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
