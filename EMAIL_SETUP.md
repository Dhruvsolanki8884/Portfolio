# Email Integration Setup Guide

Your portfolio contact form is ready to send emails! This guide will help you set up email delivery.

## Current Status

The contact form (`/app/contact/page.tsx`) is fully functional with:
- ✅ Form validation
- ✅ User-friendly error messages
- ✅ API route at `/api/send-email`
- ✅ Console logging of submissions (for testing)

## Option 1: Using Resend (Recommended for Next.js)

Resend is the easiest solution for Next.js applications.

### Setup Steps:

1. **Create a Resend account**
   - Visit https://resend.com
   - Sign up and verify your email

2. **Get your API Key**
   - Go to https://resend.com/api-keys
   - Copy your API key

3. **Add environment variables**
   - In Vercel project settings > Vars section:
   - Add: `RESEND_API_KEY` = your_api_key

4. **Install Resend package**
   ```bash
   npm install resend
   ```

5. **Update the API route** (`/app/api/send-email/route.ts`)
   ```typescript
   import { Resend } from 'resend'

   const resend = new Resend(process.env.RESEND_API_KEY)

   export async function POST(request: NextRequest) {
     try {
       const body = await request.json()
       const { name, email, subject, message } = body

       // Send email to Dhruv
       const result = await resend.emails.send({
         from: 'noreply@yourdomain.com', // Use your domain or resend subdomain
         to: 'solankidhruvahir18@gmail.com',
         replyTo: email,
         subject: `New Portfolio Contact: ${subject}`,
         html: `
           <h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Subject:</strong> ${subject}</p>
           <p><strong>Message:</strong></p>
           <p>${message.replace(/\n/g, '<br>')}</p>
         `,
       })

       if (result.error) {
         throw result.error
       }

       return NextResponse.json(
         { success: true, message: 'Email sent successfully!' },
         { status: 200 }
       )
     } catch (error) {
       console.error('Email error:', error)
       return NextResponse.json(
         { error: 'Failed to send email' },
         { status: 500 }
       )
     }
   }
   ```

## Option 2: Using SendGrid

1. **Create a SendGrid account**
   - Visit https://sendgrid.com
   - Sign up and verify your account

2. **Get your API Key**
   - Go to Settings > API Keys
   - Create a new API key with Mail Send permission

3. **Add environment variable**
   - In Vercel: `SENDGRID_API_KEY` = your_api_key

4. **Install SendGrid package**
   ```bash
   npm install @sendgrid/mail
   ```

5. **Update the API route** with SendGrid client

## Option 3: Using Gmail (Less Recommended)

1. Enable 2-factor authentication on your Gmail account
2. Create an App Password: https://myaccount.google.com/apppasswords
3. Use Nodemailer with Gmail:
   ```bash
   npm install nodemailer
   ```

## Option 4: Store in Database (Alternative)

Instead of sending emails, you can store form submissions in a database:

1. **Update the API route** to save to your database
2. **Create a submissions dashboard** to view all messages
3. **Send yourself a notification** (email or SMS)

## Testing the Contact Form

### Local Testing:
1. Run `pnpm dev`
2. Go to http://localhost:3000/contact
3. Fill out the form and submit
4. Check the terminal for console logs (currently logs all submissions)

### After Setup:
1. The form will send an email to `solankidhruvahir18@gmail.com`
2. The sender's email will be in the reply-to field
3. You'll see a success message on the website

## Troubleshooting

**Email not sending?**
- Check that API key is correctly added to environment variables
- Verify the email address is correct
- Check Vercel logs: Settings > Functions > Logs

**Getting CORS errors?**
- The API route handles CORS automatically
- Ensure the API route is in the `/api` folder

**Form not submitting?**
- Check browser console (F12) for errors
- Verify network request in Network tab
- Ensure form has all required fields filled

## Email Template Customization

The email template in the API route can be customized to:
- Add your logo
- Change styling
- Add footer with social links
- Include branding colors

Example enhanced template:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(to right, #3b82f6, #1e40af); padding: 20px; color: white; text-align: center;">
    <h1>Dhruv Solanki - Portfolio</h1>
  </div>
  
  <div style="padding: 20px; background: #f9fafb;">
    <h2>New Contact Form Submission</h2>
    
    <table style="width: 100%; border-collapse: collapse;">
      <tr style="background: #f3f4f6;">
        <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Name</td>
        <td style="padding: 10px; border: 1px solid #e5e7eb;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
        <td style="padding: 10px; border: 1px solid #e5e7eb;">${email}</td>
      </tr>
      <tr style="background: #f3f4f6;">
        <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Subject</td>
        <td style="padding: 10px; border: 1px solid #e5e7eb;">${subject}</td>
      </tr>
    </table>
    
    <h3 style="margin-top: 20px;">Message:</h3>
    <p style="color: #374151; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
  </div>
  
  <div style="background: #1f2937; color: white; padding: 20px; text-align: center;">
    <p>This email was sent from your portfolio website.</p>
    <p style="font-size: 12px; color: #d1d5db;">Dhruv Solanki | Full Stack Developer</p>
  </div>
</div>
```

## Security Best Practices

1. **Never hardcode API keys** - Always use environment variables
2. **Validate email format** - Already implemented
3. **Rate limiting** - Consider adding to prevent spam
4. **CAPTCHA** - Add Google reCAPTCHA for additional protection
5. **Email verification** - Send confirmation to the user's email

## Next Steps

1. Choose an email service (Resend recommended)
2. Set up the service and get API key
3. Add environment variable in Vercel
4. Update the API route with the chosen service
5. Test the contact form
6. Deploy and enjoy receiving messages!

---

**Questions?** Check the service's documentation:
- Resend: https://resend.com/docs
- SendGrid: https://docs.sendgrid.com
- Gmail: https://nodemailer.com
