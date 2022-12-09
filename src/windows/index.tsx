
import { createRoot } from 'react-dom/client';
import "./index.css"

const container = document.getElementById("root")
const root = createRoot(container)
export const RenderApp = (Child) => root.render(Child);

