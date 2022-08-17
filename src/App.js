import "./App.css";
import Layout from "./components/ui/Layout";
import MainNavigation from "./components/Navigation/MainNavigation";
import Container from "./components/ui/Container";

function App() {

  return (
    <Layout>
      <header>
        <MainNavigation />
      </header>
      <main className="main">
        <Container />
      </main>
    </Layout>
  );
}

export default App;
