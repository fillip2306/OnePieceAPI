// src/shared/Navigation.tsx
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex items-center justify-between mb-6 mx-5">
      <img
        src="/logo.png"
        alt="Rick and Morty Logo"
        className="h-24 w-24 object-contain"
      />
      <div className="flex gap-6">
        <Link to="/" className="text-black">Home</Link>
        <Link to="/characters" className="text-black">Characters</Link>
        <Link to="/characters/1" className="text-black">Character By ID</Link>
      </div>
    </nav>
  );
}

export default Navigation;
