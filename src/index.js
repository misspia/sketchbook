import { createRoot } from 'react-dom/client'
import React from 'react'
import { Home } from "./components/Home"

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Home />)
