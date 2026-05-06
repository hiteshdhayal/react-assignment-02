# ⚔️ Quest Kitchen — Recipe Dungeon

> A retro RPG-themed meals and recipes browser powered by the FreeAPI Meals Endpoint.

## 🌟 Overview

**Quest Kitchen** is a visually striking, retro gaming-themed web application that allows users to browse through hundreds of recipes. Built with React and Vite, the application fetches data from the public Meals API and presents it in a highly stylized, pixel-art aesthetic complete with CRT scanlines, glowing orange accents, and arcade-style typography.

## ✨ Features

- **Retro Aesthetic**: Custom CSS with pixelated borders, scanline overlays, and "Press Start 2P" / "VT323" fonts.
- **Recipe Browsing**: Fetches and displays over 200+ recipes with pagination.
- **Dynamic Search**: Filter meals by name in real-time.
- **Category Filtering**: Filter recipes by categories (e.g., Vegetarian, Dessert, Chicken) available on the current page.
- **Interactive Cards**: Hover effects that reveal recipe interactions and stats.
- **Recipe Codex (Modal)**: Detailed view showing ingredients, measurements, and step-by-step instructions.
- **Status HUD**: A sticky bottom bar displaying current page status, similar to a classic RPG UI.

## 🛠️ Technology Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (CSS Modules)
- **Data Source**: [FreeAPI - Public Meals API](https://api.freeapi.app/api/v1/public/meals)
- **Fonts**: Google Fonts (`Press Start 2P`, `VT323`)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or Download the Repository**
2. **Navigate to the Project Directory**:
   ```bash
   cd "react assignment 02"
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
5. **Open your Browser**:
   Navigate to `http://localhost:5173` to begin your culinary quest!

## 🎮 Interface Guide

- **HP Bar**: Your "Hunger Level" displayed in the header.
- **Search Bar**: Type the name of a dish to find it instantly.
- **Filter Pills**: Click on category names to narrow down the visible recipes.
- **View Recipe**: Click on any meal card to open the Recipe Codex (Modal) and view the full ingredients and instructions.

## 📜 License

This project is created for educational purposes.
