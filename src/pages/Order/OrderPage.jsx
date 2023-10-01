import { useLocation } from "react-router-dom";
import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";
import { useTitle } from "../../hooks/useTitle";

export const OrderPage = () => {
  // SETUP LOCAL STATE DATA
  // DEFINE VARIABLE THROUGH DESTRUCTURING OBJECT 'const {}' SYNTAX TO STORE DATA FROM INVOKED IMPORTED BUILT-IN OBJECT HOOK
  const { state } = useLocation();

  useTitle("Order summary");

  return (
    <main>
      {/* USE TERNARY OPERATOR '? true : false' TO SETUP CONDITIONAL DYNAMIC CONTENT DATA */}
      {/* TARGET IMPORTED CUSTOM COMPONENT TO RENDER IT WITH <></> HTML OPERATOR TO MAKE IT AS HTML ELEMENT & ATTACH ATTRIBUTE WITH ITS VALUE AS PROPS DATA TO PASS IT DOWN TO ACCESS/USE IT THERE */}
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  );
};
