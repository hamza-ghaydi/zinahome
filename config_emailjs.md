EmailJS Setup Guide
Step 1: Install EmailJS Package
bashnpm install @emailjs/browser
Step 2: Create EmailJS Account

Go to https://www.emailjs.com/
Sign up for a free account
Verify your email address

Step 3: Add Email Service

In EmailJS dashboard, go to Email Services
Click Add New Service
Choose your email provider (Gmail, Outlook, etc.)
Follow the connection instructions
Copy your Service ID (you'll need this later)

Step 4: Create Email Template

Go to Email Templates in the dashboard
Click Create New Template
Use this template structure:

Subject: New Contact Form Submission - {{subject}}

From: {{name}}
Email: {{email}}
Phone: {{phone}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your website contact form.

Save and copy your Template ID

Step 5: Get Public Key

Go to Account → General
Find your Public Key (formerly User ID)
Copy it for use in your code

Step 6: Update Contact.jsx
Replace these placeholders in the Contact.jsx file:
javascriptawait emailjs.sendForm(
    'YOUR_SERVICE_ID',        // Replace with your Service ID
    'YOUR_TEMPLATE_ID',       // Replace with your Template ID
    formRef.current,
    'YOUR_PUBLIC_KEY'         // Replace with your Public Key
);
Example:
javascriptawait emailjs.sendForm(
    'service_abc123',
    'template_xyz789',
    formRef.current,
    'aBcDeFgHiJkLmNoPqRsTuVwXyZ'
);
Step 7: Configure Template Variables
Make sure your EmailJS template includes these variables:

{{name}} - sender's name
{{email}} - sender's email
{{phone}} - sender's phone
{{subject}} - message subject
{{message}} - message content

Step 8: Test Your Form

Fill out your contact form
Submit it
Check your email inbox for the message
Check EmailJS dashboard for delivery status

Troubleshooting
Common Issues:
CORS Errors:

Make sure you're using the correct Public Key
Verify your domain is allowed in EmailJS settings

Emails Not Sending:

Check EmailJS dashboard for errors
Verify your email service is properly connected
Check spam folder

Template Variables Not Working:

Ensure input name attributes match template variables
Verify template syntax: {{variable_name}}

Free Tier Limits
EmailJS free tier includes:

200 emails per month
1 email template
2 email services

Optional: Environment Variables
For better security, store credentials in .env file:
envREACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
Then use in your code:
javascriptawait emailjs.sendForm(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    formRef.current,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
);
Additional Features
Auto-Reply Template
Create a second template to send automatic confirmation to users:
javascript// After successful form submission
await emailjs.send(
    'YOUR_SERVICE_ID',
    'AUTO_REPLY_TEMPLATE_ID',
    {
        to_email: formData.email,
        to_name: formData.name
    },
    'YOUR_PUBLIC_KEY'
);
Rate Limiting
Add rate limiting to prevent spam:
javascriptconst [canSubmit, setCanSubmit] = useState(true);

const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    
    setCanSubmit(false);
    // ... send email
    
    // Re-enable after 60 seconds
    setTimeout(() => setCanSubmit(true), 60000);
};
Support

EmailJS Documentation: https://www.emailjs.com/docs/
EmailJS Support: support@emailjs.com
