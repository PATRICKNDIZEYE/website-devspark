# Quick Setup Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

### Step 2: Run Development Server
```bash
npm run dev
```

Your website will be available at [http://localhost:3000](http://localhost:3000)

### Step 3: Customize Content
Edit the following files to personalize your website:

**Company Info & Branding:**
- `app/layout.tsx` - Update SEO metadata and company name
- `components/Navbar.tsx` - Update logo and navigation links
- `components/Footer.tsx` - Update company info, social links, certifications

**Content Sections:**
- `components/Hero.tsx` - Main headline and hero content
- `components/Services.tsx` - Your service offerings
- `components/About.tsx` - Company story and values
- `components/Projects.tsx` - Portfolio/case studies
- `components/Testimonials.tsx` - Client testimonials
- `components/Contact.tsx` - Contact information and form

**Styling:**
- `tailwind.config.ts` - Color scheme and design tokens
- `app/globals.css` - Global styles and custom CSS

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.ts`:
```typescript
primary: {
  500: '#0ea5e9', // Your brand color
  600: '#0284c7', // Darker shade
}
```

### Update Social Links
Update in both `Navbar.tsx` and `Footer.tsx`:
```typescript
{ icon: Instagram, href: 'https://instagram.com/yourhandle' }
```

### Modify SEO
Edit `app/layout.tsx`:
```typescript
title: 'Your Company - Your Tagline'
description: 'Your compelling description'
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy

### Vercel (Easiest - Recommended)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Deploy

## 🔧 Troubleshooting

### Port already in use?
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Installation issues?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 💡 Pro Tips

1. **Images**: Add images to `/public` folder and reference them as `/image-name.jpg`
2. **Fonts**: Import custom fonts in `app/layout.tsx`
3. **Analytics**: Add Google Analytics in `app/layout.tsx`
4. **Forms**: Connect contact form to your preferred service (FormSpree, Netlify Forms, etc.)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

## 🆘 Need Help?

Contact: contact@eliteconsulting.com

---

Happy Building! 🎉

