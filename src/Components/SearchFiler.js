import { React } from "react";
import { usertext } from "../features/navi/homenav.js";
import { useDispatch } from "react-redux";

export default function SearchFiler() {
  const dispatch = useDispatch();
  const search = (event) => {
    dispatch(usertext(event.target.value));
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="p-3"
        name="search"
        id="search"
        onChange={search}
        placeholder="Search anything..."
      />
    </form>
  );
}
