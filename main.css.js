/* MVP.css v1.4 - https://github.com/andybrewer/mvp */
export default `

:root {
  --border-radius: 5px;
  --box-shadow: 2px 2px 10px;
  --color: #118bee;
  --color-accent: #118bee0b;
  --color-bg: #fff;
  --color-bg-secondary: #e9e9e9;
  --color-secondary: #97b837;
  --color-secondary-accent: #97b837;
  --color-shadow: #f4f4f4;
  --color-text: #000;
  --color-text-secondary: #999;
  --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  --hover-brightness: 1.2;
  --justify-important: center;
  --justify-normal: left;
  --line-height: 150%;
  --width-card: 285px;
  --width-card-medium: 460px;
  --width-card-wide: 800px;
  --width-content: 1080px;
}

/*
@media (prefers-color-scheme: dark) {
    :root {
        --color: #0097fc;
        --color-accent: #0097fc4f;
        --color-bg: #333;
        --color-bg-secondary: #555;
        --color-secondary: #e20de9;
        --color-secondary-accent: #e20de94f;
        --color-shadow: #bbbbbb20;
        --color-text: #f7f7f7;
        --color-text-secondary: #aaa;
    }
}
*/

/* Layout */
article aside {
  background: var(--color-secondary-accent);
  border-left: 4px solid var(--color-secondary);
  padding: 0.01rem 0.8rem;
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font);
  line-height: var(--line-height);
  margin: 0;
  overflow-x: hidden;
  padding: 0;
  font-size: 115%
}

footer,
header,
main {
  margin: 0 auto;
  max-width: var(--width-content);
  padding: 1rem;
}

hr {
  background-color: var(--color-bg-secondary);
  border: none;
  height: 1px;
  margin: 4rem 0;
}

section{margin-bottom: 4rem}

section aside {
  border: 1px solid var(--color-bg-secondary);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow) var(--color-shadow);
  margin: 1rem;
  padding: 1.25rem;
  width: var(--width-card);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
section aside header {
 margin-bottom: .3rem;
 padding: 0;
}

section aside a em {

padding: .3rem 1rem
}



section aside:hover {
  box-shadow: var(--box-shadow) var(--color-bg-secondary);
}

section aside img {
  max-width: 100%;
}

article {
max-width: 800px;

margin: 0 auto;
}

/* Headers */
article header,
div header,
main header {
  padding-top: 0;
}

header {
  text-align: var(--justify-important);
}

header a b,
header a em,
header a i,
header a strong {
  margin-left: 1rem;
  margin-right: 1rem;
}

header p {
  max-width: 40rem;
  margin: 0 auto;
}

header nav img {
  margin: 1rem 0;
}

section header {
  padding-top: 0;
  width: 100%;
}




/* Typography */
code,
samp {
  background-color: var(--color-accent);
  border-radius: var(--border-radius);
  color: var(--color-text);
  display: inline-block;
  margin: 0 0.1rem;
  padding: 0rem 0.5rem;
  text-align: var(--justify-normal);
}

details {
  margin: 1.3rem 0;
}

details summary {
  font-weight: bold;
  cursor: pointer;
}

details summary:focus {
  outline: none;
}

h1{font-size: 200%}
h2{font-size: 160%}
h3{font-size: 130%}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: var(--line-height);
}

mark {
  padding: 0.1rem;
}
ul {
  padding: 0;
  list-style-type:none;
}

ol li,
ul li {
  padding: 0.2rem 0;
}

p {
  margin: 0.75rem 0;
  padding: 0;

}

pre {
  margin: 1rem 0;
  max-width: var(--width-card-wide);
  white-space: pre-line;
}

pre code,
pre samp {
  padding: 1rem 2rem;
}

small {
  color: var(--color-text-secondary);
}

sup {
  background-color: var(--color-secondary);
  border-radius: var(--border-radius);
  color: var(--color-bg);
  font-size: xx-small;
  font-weight: bold;
  margin: 0.2rem;
  padding: 0.2rem 0.3rem;
  position: relative;
  top: -2px;
}

/* Links */
a {
  color: black;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  filter: brightness(var(--hover-brightness));
  text-decoration: underline;
}

button {
  border-radius: var(--border-radius);
  display: inline-block;
  font-size: medium;
  font-weight: bold;
  line-height: var(--line-height);
  margin: 1.5rem 0 0.5rem 0;
  padding: 1rem 2rem;
}

button {
  font-family: var(--font);
  border: none;
  border: 2px solid black;
  background: none;
}

button:hover {
background: black;
color: white;
  cursor: pointer;
  filter: brightness(var(--hover-brightness));
}


a em,
a i {
  border: 2px solid var(--color);
  border-radius: var(--border-radius);
  color: var(--color);
  display: inline-block;
  padding: 1rem 2rem;
}

/* Images */
figure {
  margin: 0;
  padding: 0;
}

figure img {
  max-width: 100%;
}

figure figcaption {
  color: var(--color-text-secondary);
}

/* Forms */
button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: none;
}

button:disabled,
input:disabled {
  background: var(--color-bg-secondary);
  border-color: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  cursor: not-allowed;
}

button[disabled]:hover {
  filter: none;
}

form {
  border: 1px solid var(--color-bg-secondary);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow) var(--color-shadow);
  display: block;
  max-width: var(--width-card-wide);
  min-width: var(--width-card);
  padding: 1.5rem;
  text-align: var(--justify-normal);
}

form header {
  margin: 1.5rem 0;
  padding: 1.5rem 0;
}

input,
label,
select,
textarea {
  display: block;
  font-size: inherit;
  max-width: var(--width-card-wide);
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
}

input,
select,
textarea {
  border: 1px solid var(--color-bg-secondary);
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  padding: 0.4rem 0.8rem;
}

input[readonly],
textarea[readonly] {
  background-color: var(--color-bg-secondary);
}

label {
  font-weight: bold;
  margin-bottom: 0.2rem;
}

/* Tables */
table {
  border: 1px solid var(--color-bg-secondary);
  border-radius: var(--border-radius);
  border-spacing: 0;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0;
}

table td,
table th,
table tr {
  padding: 0.4rem 0.8rem;
  text-align: var(--justify-important);
}

table thead {
  background-color: var(--color);
  border-collapse: collapse;
  border-radius: var(--border-radius);
  color: var(--color-bg);
  margin: 0;
  padding: 0;
}

table thead th:first-child {
  border-top-left-radius: var(--border-radius);
}

table thead th:last-child {
  border-top-right-radius: var(--border-radius);
}

table thead th:first-child,
table tr td:first-child {
  text-align: var(--justify-normal);
}

/* Quotes */
blockquote {
  display: block;
  font-size: x-large;
  line-height: var(--line-height);
  margin: 1rem auto;
  max-width: var(--width-card-medium);
  padding: 1.5rem 1rem;
  text-align: var(--justify-important);
}

blockquote footer {
  color: var(--color-text-secondary);
  display: block;
  font-size: small;
  line-height: var(--line-height);
  padding: 1.5rem 0;
}

/* Custom styles */
`
