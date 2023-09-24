import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "../Phones/PhoneCard/PhoneCard";

const Phone = () => {
  const [phone, setPhone] = useState({});
  //   const [isTrue, setIsTrue] = useState(false);

  const { id } = useParams();

  const phones = useLoaderData();
  //   console.log(phones);

  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    setPhone(findPhone);
    // console.log(findPhone);
  }, [id, phones]);
  //   }, [id, phones, isTrue]);

  console.log(phone);
  return (
    <div>
      {/*  <button onClick={() => setIsTrue(!isTrue)} classNameName="btn btn-primary">
        Click Here
      </button> */}

      <PhoneCard phone={phone} />
    </div>
  );
};

export default Phone;
