import { useParams } from "react-router-dom";

const RfqManagementDetails = () => {
  const { id } = useParams(); // Get the id from the URL

  return (
    <div>
      <h1>Viewing RFQ # {id}</h1>
      {/* You can now use the 'id' to fetch data or display content dynamically */}
      <p>Details for RFQ #{id}</p>
    </div>
  );
};

export default RfqManagementDetails;
