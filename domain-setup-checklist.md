# Custom Domain Setup Checklist: aiconsulthub.com

## Prerequisites
- ✅ Website successfully deployed on Render
- ✅ Domain `aiconsulthub.com` purchased and owned by you
- ✅ Access to domain registrar's DNS management panel

## Step-by-Step Checklist

### Phase 1: Render Configuration
- [ ] 1. Log into Render dashboard
- [ ] 2. Navigate to your `aiconsult-hub` service
- [ ] 3. Go to Settings → Custom Domains
- [ ] 4. Add domain: `aiconsulthub.com`
- [ ] 5. Add domain: `www.aiconsulthub.com`
- [ ] 6. Copy the DNS records provided by Render

### Phase 2: DNS Configuration
**At your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):**

- [ ] 7. Log into your domain registrar account
- [ ] 8. Find DNS management/DNS records section
- [ ] 9. Add A Record:
  - Type: A
  - Name: @ (or leave blank for root domain)
  - Value: [IP from Render]
  - TTL: 300 (or default)

- [ ] 10. Add CNAME Record:
  - Type: CNAME  
  - Name: www
  - Value: [CNAME from Render]
  - TTL: 300 (or default)

- [ ] 11. Save DNS changes

### Phase 3: Verification & Testing
- [ ] 12. Wait 10-30 minutes for initial propagation
- [ ] 13. Check Render dashboard for domain status
- [ ] 14. Test domain: `http://aiconsulthub.com` (may show security warning initially)
- [ ] 15. Wait for SSL certificate (up to 15 minutes)
- [ ] 16. Test secure domain: `https://aiconsulthub.com`
- [ ] 17. Test www redirect: `https://www.aiconsulthub.com`

### Phase 4: Final Validation
- [ ] 18. Test all website functionality on custom domain
- [ ] 19. Verify multilingual switching works
- [ ] 20. Test contact form submission
- [ ] 21. Check WeChat QR code functionality
- [ ] 22. Verify social media links work
- [ ] 23. Test mobile responsiveness

## DNS Propagation Tools
Use these tools to check DNS propagation:
- https://dnschecker.org
- https://whatsmydns.net
- Command line: `nslookup aiconsulthub.com`

## Expected Timeline
- **DNS Propagation**: 10 minutes - 48 hours
- **SSL Certificate**: 10-15 minutes after DNS verification
- **Full Global Propagation**: Up to 48 hours

## Troubleshooting
- **Domain not resolving**: Check DNS records are correct
- **SSL certificate not working**: Wait 15+ minutes after DNS propagation
- **WWW not redirecting**: Verify CNAME record for www subdomain
- **Site not loading**: Check Render service is running properly

## Success Indicators
✅ `https://aiconsulthub.com` loads your website  
✅ `https://www.aiconsulthub.com` redirects to main domain  
✅ SSL certificate shows as valid (green lock icon)  
✅ All website features work on custom domain  
✅ Render dashboard shows "Active" status for custom domains