import { useState } from "react";

export function UseCount() {
  const [count, setCount] = useState(1);

  const onChange = (event) => setCount(event.target.value);

  return { count, setCount, onChange };
}
