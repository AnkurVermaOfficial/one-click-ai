import "./App.css";

export default function App() {
  const navigate = (url) => {
    window.location.href = url; // Redirects to HTML pages
  };

  return (
    <div>
     
      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-3xl" >One Click AI</h1>
      </div>

      {/* Feature Cards */}
      <div className="cards-container">
        <div className="card" onClick={() => navigate("generate.html")}>
          <img src="/assets/newai.png" alt="Image Generator" className="image"/>
          <h2>Generate Image</h2>
          <p>This is an AI Image Generator. It creates an image from scratch from a text description.</p>
        </div>
        <div className="card" onClick={() => navigate("askai.html")}>
        <img src="/assets/ai.webp" alt="Ask AI" className="image"/>
          <h2>Ask AI</h2>
          <p>Ask Anything you want too...</p>
        </div>
      </div>
    </div>
  );
}
