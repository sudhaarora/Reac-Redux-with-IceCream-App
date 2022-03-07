import React from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  // console.log("numOfIceCream:",numOfIceCream);
  return (
    <div>
      <h2>Number of IceCreams - {numOfIceCream}</h2>
      <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     numOfIceCream: state.iceCream.numOfIceCream,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyIceCream: () => dispatch(buyIceCream()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
export default IceCreamContainer;
