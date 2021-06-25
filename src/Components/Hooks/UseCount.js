import { useState } from "react";

export function UseCount(startCount) {
  const [count, setCount] = useState(startCount || 1);

  const onChange = (event) => setCount(event.target.value);

  return { count, setCount, onChange };
}
