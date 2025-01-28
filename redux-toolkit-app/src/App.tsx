import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CakeView from "./features/cake/CakeView.jsx";
import IcecreamView from "./features/icecream/IcecreamView.jsx";
import UsersView from "./features/user/UsersView.jsx";

function App() {
  return (
    <>
      <div className="text-center ">
        <h2 className="text-success">Hello</h2>
        <CakeView></CakeView>
        <IcecreamView></IcecreamView>
        <UsersView></UsersView>
      </div>
    </>
  );
}

export default App;
