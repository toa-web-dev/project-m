import styled, { keyframes } from "styled-components";

function Recordplate() {
    const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

    const Plate = styled.div`
        animation: ${rotate} 5s linear infinite;
        width: 200px;
        height: 200px;
        background-color: black;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    const Label = styled.div`
        width: 120px;
        height: 120px;
        background-image: url(../../public/14947269.jpg);
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        background-color: white;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    const Centerhole = styled.div`
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: white;
    `;

    return (
        <>
            <Plate>
                <Label>
                    <Centerhole></Centerhole>
                </Label>
            </Plate>
        </>
    );
}
export default Recordplate;
