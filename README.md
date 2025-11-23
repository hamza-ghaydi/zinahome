# ZinaHome

<div align="center">

![ZinaHome Logo](https://img.shields.io/badge/ZinaHome-Furniture_Store-DD7210?style=for-the-badge&logo=react&logoColor=white)

**Premium Furniture E-Commerce Platform**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![EmailJS](https://img.shields.io/badge/EmailJS-Integrated-EA4335?style=flat-square&logo=gmail&logoColor=white)](https://www.emailjs.com/)

[Live Demo](https://zinahome.vercel.app) • [Features](#features) • [Installation](#installation) 

---

**Powered by** [Hamza Rhaidi](https://hamza-rhaidi.vercel.app/)

</div>

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Clipboard.png" alt="Clipboard" width="25" height="25" /> Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Bullseye.png" alt="Target" width="25" height="25" /> About

**ZinaHome** is a modern, responsive e-commerce platform specializing in premium furniture and home decor. Built with React and styled with Tailwind CSS, it offers a seamless shopping experience with elegant UI/UX design, and intuitive navigation.

The platform showcases world-class furniture collections, allowing customers to browse products, view detailed information, and easily get in touch through an integrated contact system.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Sparkles.png" alt="Sparkles" width="25" height="25" /> Features

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/House.png" alt="House" width="20" height="20" /> Core Features
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, elegant interface with smooth animations
- **Product Showcase** - Beautiful product galleries with detailed views
- **Shopping Cart** - Full-featured cart with add/remove functionality
- **Contact System** - EmailJS integrated contact form

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Artist%20Palette.png" alt="Palette" width="20" height="20" /> Design Features
- **Dark Theme** - Eye-friendly dark color scheme with orange accents
- **Interactive Elements** - Hover effects and dynamic UI components
- **Icon Library** - Phosphor Icons for consistent iconography
- **Custom Components** - Reusable UI components

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Shopping%20Cart.png" alt="Cart" width="20" height="20" /> E-Commerce Features
- **Product Filtering** - Filter by category, price, and more
- **Product Search** - Quick search functionality
- **Wishlist** - Save favorite products
- **Customer Reviews** - Product ratings and testimonials
- **Order Tracking** - Track order status (planned)

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer%20and%20Wrench.png" alt="Tools" width="25" height="25" /> Tech Stack

### Frontend
- **React** 18.x - JavaScript library for building user interfaces
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Phosphor Icons** - Modern icon family

### Utilities
- **EmailJS** - Email service for contact forms
- **React Hooks** - useState, useEffect, useRef, useCallback

### Development Tools
- **Vite** - Next generation frontend tooling
- **npm/yarn** - Package management
- **Git** - Version control

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Package.png" alt="Package" width="25" height="25" /> Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/hamza-ghaydi/zinahome.git
cd zinahome
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Build for production**
```bash
npm run build
# or
yarn build
```

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Gear.png" alt="Gear" width="25" height="25" /> Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/File%20Folder.png" alt="Folder" width="25" height="25" /> Project Structure

```
zinahome/
├── dist/                          # Production build output
├── node_modules/                  # Dependencies
├── public/                        # Static assets
├── src/
│   ├── assets/                    # Images, fonts, etc.
│   ├── constant/                  # Constants and configurations
│   ├── context/                   # React Context for state management
│   ├── data/                      # Static data and mock data
│   ├── layouts/                   # Layout components
│   │   ├── Footer.jsx            # Site footer
│   │   ├── Navbar.jsx            # Navigation bar
│   │   └── TopBar.jsx            # Top bar component
│   ├── pages/                     # Page components
│   │   ├── about/
│   │   │   └── About.jsx         # About page
│   │   ├── blog/
│   │   │   ├── Blog.jsx          # Blog listing page
│   │   │   └── SinglePost.jsx    # Individual blog post
│   │   ├── cart/
│   │   │   ├── Cart.jsx          # Shopping cart page
│   │   │   └── Checkout.jsx      # Checkout page
│   │   ├── contact/
│   │   │   └── Contact.jsx       # Contact page with form
│   │   ├── home/
│   │   │   └── Home.jsx          # Homepage
│   │   ├── partials/              # Reusable page sections
│   │   │   ├── CategoryIcons.jsx # Category icons component
│   │   │   ├── FeatureBar.jsx    # Features showcase
│   │   │   ├── Herosection.jsx   # Hero section
│   │   │   └── ProductSection.jsx # Product display section
│   │   └── shop/
│   │       ├── ProductDetails.jsx # Product Details page
│   │       └── shop.jsx           # Shop page
│   ├── App.jsx                    # Main App component
│   ├── index.css                  # Global styles
│   └── main.jsx                   # Application entry point
├── .gitignore                     # Git ignore rules
├── config_emailjs.md             # EmailJS configuration guide
├── eslint.config.js              # ESLint configuration
├── index.html                     # HTML template
├── package-lock.json             # Locked dependencies
├── package.json                   # Project dependencies
├── README.md                      # Project documentation
├── vite.config.js                # Vite configuration
└── tailwind.config.js            # Tailwind CSS configuration
```

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" /> Usage

### Running Locally

```bash
# Development mode
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Adding New Products

1. Navigate to `src/data/products.js`
2. Add product object with required fields:
```javascript
{
  id: "unique_id",
  name: "Product Name",
  price: 999.99,
  category: "category_name",
  image: "image_url",
  description: "Product description"
}
```

### Customizing Theme

Edit `tailwind.config.js` to customize colors and styling:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#DD7210',
        secondary: '#your_color',
      },
    },
  },
}
```

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Camera%20with%20Flash.png" alt="Camera" width="25" height="25" /> Screenshots

## 🖼️ Project Screenshots


<table>
<tr>
<td valign="top">
<h3 align="center">Home Page</h3>
  <hr>
  
<img src="screenshots/home.png" width="500" />
</td>
<td valign="top">
<b>About Us</b><br>
<img src="screenshots/about.png" width="500" />
</td>
</tr>
</table>

---

<table>
<tr>
<td valign="top">
<b>Product Catalog</b><br>
<img src="screenshots/shop.png" width="430" />
</td>
<td valign="top">
<b>Blog</b><br>
<img src="screenshots/blog.png" width="430" />
</td>
</tr>
</table>

---

### 🔹 Row 3 — Contact Page (Full Width)
<img src="screenshots/contact.png" width="800" />



## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png" alt="Handshake" width="25" height="25" /> Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Page%20with%20Curl.png" alt="Document" width="25" height="25" /> License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Envelope.png" alt="Envelope" width="25" height="25" /> Contact

**Developer:** Hamza Rhaidi

- Portfolio: [https://hamza-rhaidi.vercel.app/](https://hamza-rhaidi.vercel.app/)
- Email: hamzaghaydi01@gmail.com
- LinkedIn: [Hamza Rhaidi](https://www.linkedin.com/in/hamza-rhaidi/)
- GitHub: [@hamza-ghaydi](https://github.com/hamza-ghaydi)

**Project Link:** [https://github.com/hamza-ghaydi/zinahome](https://github.com/hamza-ghaydi/zinahome)

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Folded%20Hands.png" alt="Thank You" width="25" height="25" /> Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Phosphor Icons](https://phosphoricons.com/) - Icon library
- [EmailJS](https://www.emailjs.com/) - Email service
- [Vite](https://vitejs.dev/) - Build tool

---

<div align="center">

**Made with <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png" alt="Heart" width="20" height="20" /> by [Hamza Rhaidi](https://hamza-rhaidi.vercel.app/)**

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="20" height="20" /> Star this repo if you like it!

</div
