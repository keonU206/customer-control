import React from "react";

const Customer = ({ id, image, name, birthday, gender, job }) => {
  return (
    <div>
      {/* CustomerProfile 및 CustomerInfo에 prop을 직접 전달 */}
      <CustomerProfile image={image} name={name} id={id} />
      <CustomerInfo birthday={birthday} gender={gender} job={job} />
    </div>
  );
};

const CustomerProfile = ({ image, name, id }) => {
  return (
    <div>
      <img src={image} alt="profile photo" />
      <h2>
        {name}({id})
      </h2>
    </div>
  );
};

const CustomerInfo = ({ birthday, gender, job }) => {
  return (
    <div>
      <p>{birthday}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </div>
  );
};

export default Customer;
