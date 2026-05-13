import { useState } from "react";

function ClickablePicture() {
  const [picture, setPicture] = useState(false);

  const updatePicture = () => {
    setPicture(!picture);
  };

  return (
    <div>
      <img
        style={{ width: 200, height: 200 }}
        onClick={updatePicture}
        src={
          picture === false
            ? "/src/assets/images/maxence.png"
            : "/src/assets/images/maxence-glasses.png"
        }
      />
    </div>
  );
}
export default ClickablePicture;
