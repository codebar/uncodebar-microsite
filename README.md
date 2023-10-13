
# uncodebar Microsite

Welcome to the `uncodebar-microsite` repository. This microsite is dedicated to the uncodebar event.

## Features

- Built with Tailwind CSS for rapid UI development.
- Live reloading with BrowserSync.
- CSS watching and building with Tailwind and Nodemon.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/uncodebar-microsite.git
```

2.  Navigate to the project directory:

```bash
cd uncodebar-microsite
```

3. Install the dependencies: (if you don't want to use the build tool include the style.css in the doc head, and tailwind CDN link )

To include the main stylesheet in your HTML:

```html
<link rel="stylesheet" href="./css/style.css">

<script src="https://cdn.tailwindcss.com"></script>
```


```bash
npm install
```

1. Start the development server:

```bash
npm run start
```

This will start the BrowserSync server and watch for CSS changes.

## Scripts

- `watch:css`: Watches for changes in the `css/style.css` and rebuilds the CSS using Tailwind.
- `start`: Starts the BrowserSync server and watches for CSS changes.

## License

This project is licensed under the MIT License.

---

### DOCS.md

# uncodebar Microsite Documentation

## Project Structure

- `<city>.html`: The main entry point of the application.
- `css/`: Contains the main stylesheet `style.css` which is processed by Tailwind CSS.


## Development

### CSS Building and Watching

The project uses Tailwind CSS for styling. Any changes made to `css/style.css` will be automatically processed by Tailwind and the output will be saved to `css/output.css`.

To watch for CSS changes, run:

```bash
npm run watch:css
```

### Starting the Development Server

To start the BrowserSync server and watch for CSS changes concurrently, run:

```bash
npm run start
```

This will serve the site on a local server and automatically reload the browser upon changes to the HTML or CSS files.

## Dependencies

- `tailwindcss`: A utility-first CSS framework for rapid UI development.
- `browser-sync`: Keeps multiple browsers & devices in sync when building websites.
- `concurrently`: Run multiple commands concurrently.
- `nodemon`: Monitor for any changes in your node.js application and automatically restart the server.
