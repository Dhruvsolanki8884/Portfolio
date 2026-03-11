# ⚡ Quick Start Guide - Dhruv Solanki Portfolio

Get your portfolio running in minutes!

## 🚀 5-Minute Setup

### 1. **Start Development Server**
```bash
pnpm install
pnpm dev
```
Then open [http://localhost:3000](http://localhost:3000)

### 2. **Edit Your Info**
Edit `/lib/config.ts` - update:
```typescript
export const portfolio = {
  name: 'Your Name',
  email: 'your-email@example.com',
  phone: '+91 YOUR-PHONE',
  // ... rest of your info
}
```

### 3. **Deploy to Vercel**
```bash
npm i -g vercel
vercel
# Follow prompts
vercel --prod  # Production deployment
```

Done! Your portfolio is live! 🎉

---

## 📝 Essential Edits

### Update Contact Info
**File:** `/components/sidebar.tsx`
```tsx
// Find and replace:
solankidhruvahir18@gmail.com → your-email@example.com
+91 7575898884 → your-phone
```

### Update Profile Photo
**File:** `/public/dhruv-photo.jpg`
- Replace with your photo
- Or update path in `/components/sidebar.tsx`

### Add Projects
**File:** `/app/work/page.tsx`
```tsx
{
  title: 'Your Project',
  description: 'What it does',
  technologies: ['React', 'Node.js'],
  features: ['Feature 1', 'Feature 2'],
  status: 'Live',
  website: 'https://your-project.com',
  github: 'https://github.com/your-repo',
}
```

### Update Skills
**File:** `/lib/config.ts`
```typescript
skills: {
  languages: ['HTML', 'CSS', 'JavaScript'],
  frontend: ['React', 'Next.js'],
  backend: ['Node.js', 'Express'],
  database: ['MongoDB', 'MySQL'],
  tools: ['Git', 'GitHub', 'VS Code'],
}
```

---

## 🎨 Styling Quick Edits

### Change Primary Color
Replace all instances:
- `blue-600` → Your color (e.g., `purple-600`)
- `blue-400` → Your color lighter (e.g., `purple-400`)

### Change Font
**File:** `/app/layout.tsx`
```tsx
import { Inter, JetBrains_Mono } from 'next/font/google'

const sans = Inter({ subsets: ['latin'] })
const mono = JetBrains_Mono({ subsets: ['latin'] })
```

---

## 🌐 Pages Overview

| Page | File | Purpose |
|------|------|---------|
| Home | `/app/page.tsx` | Hero & intro |
| About | `/app/about/page.tsx` | Skills & experience |
| Work | `/app/work/page.tsx` | Project showcase |
| Contact | `/app/contact/page.tsx` | Get in touch form |

---

## 📱 Mobile Testing

```bash
# Test on mobile devices
pnpm dev

# Visit from phone on same network:
http://YOUR-LAPTOP-IP:3000
```

---

## 🔗 Important Customization Files

```
lib/
├── config.ts          ← EDIT HERE for all content
└── utils.ts           ← Helper functions

components/
├── sidebar.tsx        ← Update contact info here
└── ui/                ← UI components

app/
├── page.tsx          ← Home page
├── about/page.tsx    ← About page
├── work/page.tsx     ← Update projects here
└── contact/page.tsx  ← Contact form
```

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] Updated name and title
- [ ] Updated email and phone
- [ ] Added profile photo
- [ ] Updated projects
- [ ] Reviewed skills
- [ ] Checked links work
- [ ] Tested on mobile
- [ ] Verified dark mode

```bash
# Deploy to production
vercel deploy --prod
```

---

## 💻 Useful Commands

```bash
# Development
pnpm dev              # Start dev server

# Building
pnpm build           # Build for production
pnpm start           # Start production server

# Linting
pnpm lint            # Check code quality

# Deployment
vercel               # Deploy to staging
vercel --prod        # Deploy to production
```

---

## 🎯 Next Steps

1. **Customize content** - Edit `/lib/config.ts`
2. **Add your photo** - Replace `/public/dhruv-photo.jpg`
3. **Update projects** - Edit `/app/work/page.tsx`
4. **Test locally** - Run `pnpm dev`
5. **Deploy** - Use `vercel --prod`
6. **Share** - Send your live URL to people!

---

## ❓ Common Questions

**Q: How do I add more projects?**
A: Edit `/app/work/page.tsx` - copy a project and modify

**Q: How do I change colors?**
A: Find-replace `blue-600` with your color in components

**Q: Where do I add a resume?**
A: Save as `/public/resume.pdf` - download button will work

**Q: How do I make the contact form work?**
A: See ENHANCEMENTS.md for email integration options

**Q: Can I use a custom domain?**
A: Yes! In Vercel Dashboard → Settings → Domains

**Q: How do I add a blog?**
A: See ENHANCEMENTS.md for blog setup guide

---

## 🔑 Environment Variables (Optional)

Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile
```

---

## 📊 Project Structure

```
portfolio/
├── app/                    # Pages and routes
│   ├── page.tsx           # Home
│   ├── about/page.tsx     # About
│   ├── work/page.tsx      # Projects
│   ├── contact/page.tsx   # Contact
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── sidebar.tsx        # Navigation
│   └── ui/                # UI components
├── lib/
│   ├── config.ts          # Configuration
│   └── utils.ts           # Utilities
├── public/
│   └── dhruv-photo.jpg    # Profile photo
└── README.md              # Documentation
```

---

## ✨ Features You Have

✅ Responsive Design
✅ Dark Mode Support
✅ Mobile Menu
✅ SEO Optimized
✅ Fast Loading
✅ Contact Form
✅ Project Showcase
✅ Social Links
✅ Skills Display
✅ Experience Timeline

---

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [React Docs](https://react.dev)

---

## 🎉 You're Ready!

Your professional portfolio is complete and ready to showcase to the world. Make it yours by customizing the content, then deploy and start getting noticed! 

**Start with `/lib/config.ts` - that's where all your content lives.** 🚀

---

**Questions?** Check README.md or SETUP.md for more details!
