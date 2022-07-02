# Install tailwind postcss & autoprefixer

`pnpm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

# Generate our tailwind.config.js and postcss.config.js

`npx tailwindcss init -p`

# tailwind.config.js should look like this:

```
module.exports = {
    purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
```

# bring tailwind directives in

/_ index.css _/ @tailwind base; @tailwind components; @tailwind utilities;

# Import tailwind styles at the root

```
import { render } from "solid-js/web";
import "tailwindcss/tailwind.css";

import "./index.css";
import App from "./App";
render(App, document.getElementById("root"));

```
