import PropTypes from "prop-types";
import PhonesCard from "./PhonesCard";

const Phones = ({ phones }) => {
  return (
    <div>
      <h2 className="text-3xl text-center py-10">All categories phones</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {phones?.map((phone) => (
          <PhonesCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

Phones.propTypes = {
  phones: PropTypes.object,
};

export default Phones;
