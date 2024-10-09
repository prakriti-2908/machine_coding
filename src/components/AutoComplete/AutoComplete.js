import { useState, useRef, useEffect } from "react";
import "./styles/AutoComplete.css";

const cityNames = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Jammu and Kashmir (Union Territory)",
    "Ladakh (Union Territory)"
];

const Autocomplete = () => {
  const [data] = useState(cityNames);
  const [filteredData, setfilteredData] = useState(cityNames);
  const [value, setValue] = useState("");
  const autocompleteRef = useRef(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const debounce = function (fn) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      let context = this;
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (value) => {
    setValue(value);
    const optimised = debounce(fun);
    optimised(value);
  };

  const fun = (value) => {
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setfilteredData(filteredData);
  };

  const handleClick = (value) => {
    setValue(value);
    setShow(false);
  };
  return (
    <>
      <div className="autocomplete" ref={autocompleteRef}>
        <input
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          placeholder="Type to Search a State"
          onFocus={() => setShow(true)}
        />
        <div className="states-div">
        {show && (
          <ul>
            {filteredData.map((row) => {
              return <li onClick={() => handleClick(row)}>{row}</li>;
            })}
          </ul>
        )}
        </div>
      </div>
    </>
  );
};

export default Autocomplete;