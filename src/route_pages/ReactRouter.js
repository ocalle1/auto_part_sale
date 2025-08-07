import React from "react";
import { Link } from "react-router-dom";
// import Inventory from "./Inventory";


function ReactRouter() {
return (
<>
<div className="navbar">
{/* <Link to="/about"><button>About</button> </Link> */}
<nav>

<Link to="/"><button>Home</button> </Link>
<Link to="/inventory"><button>Inventory</button> </Link>
</nav>
{/* <button>home</button> */}
</div>
</>
)
}

export default ReactRouter;