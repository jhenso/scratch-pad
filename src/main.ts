import './style.css';

const getApp = () => document.querySelector<HTMLDivElement>('#app') ?? null;

const app = getApp();

if (!app) {
  throw new Error('App div not found');
}

app.innerHTML = `
  <div>
    <h1>Scratch Pad</h1>
  </div>
`;
