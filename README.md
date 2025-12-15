# Elite Consulting - Professional Consulting Website

A stunning, modern consulting website built with Next.js 14, TypeScript, and Tailwind CSS. Features a dark theme, smooth animations, and professional design optimized for global recognition and trust.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Backendless**: No backend required - pure frontend application
- **Stunning Animations**: Powered by Framer Motion for smooth, professional animations
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Built-in SEO optimization for maximum visibility
- **Dark Theme**: Professional dark theme with glassmorphism effects
- **Performance**: Optimized for speed and performance

## 📦 Sections Included

- **Hero Section**: Compelling headline with CTAs and animated background
- **Stats**: Animated counter stats showing achievements
- **About**: Company overview with feature highlights
- **Services**: 8+ service offerings with beautiful cards
- **Projects**: Portfolio showcase with project cards
- **Testimonials**: Client testimonials with ratings
- **Contact**: Full contact form with quick response guarantee
- **Footer**: Comprehensive footer with newsletter signup

## 🛠️ Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (Icons)

## 📥 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Website_dEV
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: { /* your colors */ },
  dark: { /* your colors */ }
}
```

### Content
Update content in the component files located in `/components`:
- `Hero.tsx` - Hero section content
- `Services.tsx` - Services offerings
- `About.tsx` - Company information
- `Projects.tsx` - Portfolio projects
- `Testimonials.tsx` - Client testimonials
- `Contact.tsx` - Contact information

### SEO & Metadata
Update metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ... more metadata
}
```

## 📱 Social Links

Update social media links in `components/Navbar.tsx` and `components/Footer.tsx`

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
- Netlify
- AWS Amplify
- Digital Ocean
- Any static hosting service

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For support, email contact@eliteconsulting.com or join our Slack channel.

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

Built with ❤️ using Next.js

