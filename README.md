# Dhruv Solanki - Professional Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features a sleek sidebar navigation, project showcase, and contact system.

## 🎨 Features

- **Responsive Sidebar Navigation** - Easy navigation with mobile-friendly menu
- **Home Page** - Hero section with quick intro and CTA buttons
- **About Page** - Skills, experience, education, and strengths
- **Work/Projects Page** - Showcase of 4+ completed projects with details
- **Contact Page** - Get in touch form and contact information
- **Dark Mode Support** - Automatic theme detection
- **SEO Optimized** - Meta tags and open graph integration
- **Mobile Responsive** - Works seamlessly on all devices
- **Fast Loading** - Optimized performance with Next.js

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000 in your browser
```

## 📁 Project Structure

```
/app
  ├── page.tsx              # Home page
  ├── about/page.tsx        # About page
  ├── work/page.tsx         # Projects showcase
  ├── contact/page.tsx      # Contact page
  ├── layout.tsx            # Root layout
  └── globals.css           # Global styles

/components
  ├── sidebar.tsx           # Navigation sidebar
  └── ui/                   # shadcn/ui components

/public
  └── dhruv-photo.jpg       # Profile photo
```

## 🎯 Customization Guide

### Update Contact Information

Edit `/components/sidebar.tsx` to update:
```tsx
<a href="mailto:youremail@example.com">
  youremail@example.com
</a>
```

### Add Your Photo

Replace `/public/dhruv-photo.jpg` with your photo or update the path in `/components/sidebar.tsx`:
```tsx
<Image
  src="/your-photo.jpg"
  alt="Your Name"
  // ...
/>
```

### Update Projects

Edit `/app/work/page.tsx` and modify the `projects` array:
```tsx
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description',
    technologies: ['React', 'Node.js'],
    features: ['Feature 1', 'Feature 2'],
    status: 'Live',
    website: 'https://your-project.com',
    github: 'https://github.com/your-repo',
  },
  // Add more projects...
]
```

### Customize Colors

The portfolio uses a blue color scheme. To change colors:

1. Edit `/app/globals.css` - Modify CSS variables
2. Update Tailwind classes in components - Replace `blue-600` with your color

Example color variables in classes:
- `bg-blue-600` → `bg-purple-600`
- `text-blue-400` → `text-purple-400`
- `border-blue-500` → `border-purple-500`

### Add Resume Download

Create a `/public/resume.pdf` file and the download button will work automatically.

### Update Social Links

Edit `/components/sidebar.tsx` and `/app/contact/page.tsx` to update social media links:
```tsx
<a href="https://linkedin.com/in/yourprofile">
  LinkedIn
</a>
```

## 🔧 Advanced Features

### Contact Form Integration

The current contact form shows a success message locally. To integrate with an email service:

1. **Using Vercel KV (Redis)**:
```tsx
import { kv } from '@vercel/kv';

// In your API route
export async function POST(req) {
  const { name, email, message } = await req.json();
  await kv.lpush('contact-messages', JSON.stringify({name, email, message}));
  return Response.json({ success: true });
}
```

2. **Using SendGrid**:
```bash
pnpm add @sendgrid/mail
```

3. **Using Nodemailer** (for backend):
```bash
pnpm add nodemailer
```

### Add Blog Section

Create `/app/blog/page.tsx` and add blog posts with MDX support:
```bash
pnpm add next-mdx-remote
```

### Analytics

Add Google Analytics or Vercel Analytics:
```tsx
// Already included in layout.tsx
import { Analytics } from '@vercel/analytics/next'
```

### Add Blog/Articles

Create an API route to fetch blog posts and display them on a new page.

## 📊 Performance Tips

1. **Image Optimization** - Use Next.js Image component (already doing this)
2. **Code Splitting** - Components are code-split automatically
3. **Caching** - Static pages are cached by default
4. **Minification** - Automatic in production builds

## 🌐 Deployment

### Deploy to Vercel

```bash
# Connect your GitHub repo
# Push to main branch
# Vercel auto-deploys

# Or manually:
vercel deploy
```

### Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-profile
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile
```

## 📝 SEO Optimization

The portfolio includes:
- Meta descriptions
- Open Graph tags
- Semantic HTML
- Alt text for images
- Structured data ready
- Mobile viewport configuration

## 🤝 Contributing

Feel free to customize and improve this portfolio for your own use!

## 📞 Contact

- **Email**: solankidhruvahir18@gmail.com
- **Phone**: +91 7575898884
- **WhatsApp**: +91 7575898884

## 📄 License

This project is open source and available for personal use.

## 🙏 Credits

- Built with [Next.js](https://nextjs.org)
- UI Components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide React](https://lucide.dev)
- Styling with [Tailwind CSS](https://tailwindcss.com)

---

**Happy coding! Feel free to reach out for any questions or collaboration opportunities.** 🚀
