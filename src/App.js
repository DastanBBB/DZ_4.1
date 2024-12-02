import './App.css';


function Header() {
    return (
        <>
            <h1>I am Header Component</h1>
            <Title/>
        </>
    )
}


function Content() {
    return (
        <>
            <h2>I am Content Component</h2>
            <Title/>
        </>
    )
}


function Footer() {
    return (
        <>
            <h2>I am Footer Component</h2>
            <Title/>
        </>
    )
}

function Title() {
    return (
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    )
}

function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;


