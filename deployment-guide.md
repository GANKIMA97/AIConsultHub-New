# AIConsult Hub Deployment Guide for Render.com

## Prerequisites
- GitHub account (to connect your repository)
- Render.com account (free tier available)

## Deployment Steps

### 1. Push Code to GitHub
1. Create a new repository on GitHub
2. Push your project files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

### 2. Deploy on Render.com

#### Option A: Using render.yaml (Recommended)
1. Go to [Render.com](https://render.com) and sign up/login
2. Click "New +" and select "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file and configure the service

#### Option B: Manual Setup
1. Go to [Render.com](https://render.com) and sign up/login
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `aiconsult-hub`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or choose paid for better performance)

### 3. Environment Variables
No additional environment variables are required for the basic deployment.

### 4. Custom Domain Setup (aiconsulthub.com)

#### Step 1: Configure Domain in Render
1. In your Render dashboard, go to your `aiconsult-hub` service
2. Navigate to "Settings" → "Custom Domains"
3. Click "Add Custom Domain"
4. Enter: `aiconsulthub.com`
5. Also add: `www.aiconsulthub.com` (for www redirect)

#### Step 2: DNS Configuration
Render will provide you with DNS records to configure. You'll need to add these records with your domain registrar (where you bought aiconsulthub.com):

**For Root Domain (aiconsulthub.com):**
- **Type**: A Record
- **Name**: @ (or leave blank)
- **Value**: [IP address provided by Render]

**For WWW Subdomain (www.aiconsulthub.com):**
- **Type**: CNAME
- **Name**: www
- **Value**: [CNAME value provided by Render]

#### Step 3: SSL Certificate
- Render will automatically provision a free SSL certificate
- This may take 10-15 minutes after DNS propagation
- Your site will be available at `https://aiconsulthub.com`

#### Step 4: Domain Verification
- DNS changes can take 24-48 hours to propagate globally
- Use tools like `nslookup` or online DNS checkers to verify
- Once verified, Render will show "Active" status for your custom domain

## Files Created for Deployment

### render.yaml
- Automatic service configuration for Render
- Specifies Node.js environment, build commands, and settings

### Dockerfile
- Container configuration for Docker-based deployments
- Optimized for Node.js applications

### .dockerignore
- Excludes unnecessary files from Docker builds
- Improves build performance and security

## Deployment Features

✅ **Zero Configuration**: The project is ready to deploy with no additional setup
✅ **Automatic Builds**: Render will rebuild on every git push
✅ **SSL Certificate**: Automatic HTTPS with free SSL certificate
✅ **CDN**: Global content delivery network included
✅ **Health Checks**: Automatic service monitoring

## Expected Result
After deployment, your AIConsult Hub website will be available at:
- **Default Render URL**: `https://aiconsult-hub.onrender.com`
- **Custom Domain**: `https://aiconsulthub.com` (after DNS configuration)

The website includes:
- Complete multilingual support (English, Chinese, French)
- Responsive design for all devices
- Contact form functionality
- Professional consulting services showcase
- WeChat QR code integration
- Social media links

## Troubleshooting

### Node.js Version Issue (Common Error)
If you see "Could not resolve entry module" error during build:

**Problem**: Render uses Node.js 22 by default, but the project uses `import.meta.dirname` which requires Node.js 18.

**Solution**: 
1. The `.nvmrc` file specifies Node.js 18.20.4
2. Use the updated `render.yaml` with explicit build commands
3. If still failing, try the manual deployment option below

### Manual Deployment Steps (Alternative)
If the automatic Blueprint deployment fails:

1. Go to Render.com → "New +" → "Web Service"
2. Connect your GitHub repository  
3. Use these settings:
   - **Environment**: Node
   - **Build Command**: 
     ```
     npm install && cd client && npx vite build --outDir ../dist/public && cd .. && npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
     ```
   - **Start Command**: `npm start`
   - **Node Version**: 18.20.4 (in Advanced settings)

### Build Issues
- Ensure all dependencies are in `package.json`
- Check that Node.js version is compatible (18.x recommended)
- Verify the build output directory structure

### Runtime Issues
- Check the logs in Render dashboard
- Verify environment variables are set correctly
- Ensure PORT environment variable is being used

### Performance
- Free tier has limitations (sleeping after inactivity)
- Consider upgrading to paid tier for production use

## Support
For deployment issues, check:
1. Render documentation: [render.com/docs](https://render.com/docs)
2. This project's build logs in Render dashboard
3. GitHub repository for any missing files