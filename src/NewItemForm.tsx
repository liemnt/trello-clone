import React, { useState } from "react";
import { useFocus } from "./useFocus";

import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles";

interface NewItemProps {
  onAdd(test: string): void;
}

export const NewItemForm = ({ onAdd }: NewItemProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
