# Setting Up Custom Domain on Replit: aiconsulthub.com

## Prerequisites
- Replit Hacker Plan (required for custom domains)
- Domain ownership of aiconsulthub.com
- Access to domain registrar's DNS settings

## Steps to Configure Custom Domain on Replit

### Step 1: Enable Custom Domain in Replit
1. Go to your Replit project dashboard
2. Click on your project name in the top left
3. Navigate to "Settings" or look for "Domains" section
4. Click "Link Domain" or "Add Custom Domain"
5. Enter: `aiconsulthub.com`

### Step 2: DNS Configuration at Your Domain Registrar
Replit will provide you with DNS records. You'll need to configure these at your domain registrar:

**For Root Domain (aiconsulthub.com):**
- **Type**: CNAME
- **Name**: @ (or leave blank)
- **Value**: [CNAME provided by Replit]

**Alternative A Record (if CNAME not supported for root):**
- **Type**: A
- **Name**: @ (or leave blank)  
- **Value**: [IP address provided by Replit]

**For WWW Subdomain (optional):**
- **Type**: CNAME
- **Name**: www
- **Value**: [CNAME provided by Replit]

### Step 3: SSL Certificate
- Replit automatically handles SSL certificates
- Your site will be available at `https://aiconsulthub.com`
- SSL activation may take 10-15 minutes after DNS propagation

### Step 4: Verification
- DNS propagation: 10 minutes to 48 hours
- Test your domain: `https://aiconsulthub.com`
- Verify all website functionality works on custom domain

## Replit-Specific Notes
- Custom domains require Replit Hacker Plan ($7/month)
- Replit handles SSL certificates automatically
- Domain linking is done through the project settings
- Changes reflect immediately after DNS propagation

## Expected Result
Your AIConsult Hub website will be available at:
- `https://aiconsulthub.com` (custom domain)
- Original Replit URL will redirect to custom domain

## Troubleshooting
- **Domain not available**: Upgrade to Replit Hacker Plan
- **DNS not resolving**: Check DNS records at registrar
- **SSL issues**: Wait 15+ minutes after DNS propagation
- **Site not loading**: Verify Replit project is running

## Alternative: Replit Deployments
If you prefer a more production-ready setup:
1. Use Replit Deployments instead of development environment
2. Deployments offer better performance and reliability
3. Custom domains work the same way with Deployments