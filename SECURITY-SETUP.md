# Security Setup Guide

## ⚠️ Important Security Update (v1.6.0)

As of version 1.6.0, hardcoded database credentials have been **removed** from the client-side code for security reasons.

### What Changed

**Before (v1.5.3):**
```javascript
// ❌ INSECURE - Credentials exposed in browser bundle
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://eagagcnqzdbztxexrjqt.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGci...';
```

**After (v1.6.0):**
```javascript
// ✅ SECURE - Requires environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
```

---

## Required Environment Variables

You **must** set these environment variables for the application to work:

### Local Development

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` and add your credentials:**
   ```env
   VITE_SUPABASE_URL=https://eagagcnqzdbztxexrjqt.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZ2FnY25xemRienR4ZXhyanF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5NTEzMjgsImV4cCI6MjA4MjUyNzMyOH0.LjxQ6lJVBUa2Ha2aELY_-fVIi4jQVlSLWh0IiTuBEJY
   ```

3. **Restart your development server:**
   ```bash
   npm run dev
   ```

---

### Production Deployment (Vercel)

#### Option 1: Vercel Dashboard (Recommended)

1. Go to your [Vercel Project Dashboard](https://vercel.com/dashboard)
2. Select your project: **elite-detailing-website**
3. Navigate to **Settings** → **Environment Variables**
4. Add the following variables:

   | Name | Value | Environment |
   |------|-------|-------------|
   | `VITE_SUPABASE_URL` | `https://eagagcnqzdbztxexrjqt.supabase.co` | Production, Preview, Development |
   | `VITE_SUPABASE_ANON_KEY` | `eyJhbGci...` (full key) | Production, Preview, Development |

5. Click **Save**
6. Go to **Deployments** → Click **⋯** on latest deployment → **Redeploy**

#### Option 2: Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# Add environment variables
vercel env add VITE_SUPABASE_URL production
# Paste: https://eagagcnqzdbztxexrjqt.supabase.co

vercel env add VITE_SUPABASE_ANON_KEY production
# Paste: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Redeploy
vercel --prod
```

---

## Verifying Configuration

### Development
Run the app and check the browser console:
```bash
npm run dev
```

**Expected output:**
```
✅ Supabase URL configured: true
✅ Supabase Key configured: true
```

**If misconfigured:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️  SUPABASE CONFIGURATION MISSING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
...
```

### Production
After deployment, test the booking system:
1. Visit your production URL
2. Navigate to `/booking`
3. Try to create a test booking
4. If successful, environment variables are properly configured

---

## Security Best Practices

### ✅ Do's

1. **Always use environment variables** - Never hardcode credentials
2. **Use `.env` file locally** - Never commit `.env` to git (it's in `.gitignore`)
3. **Set Vercel env vars** - Configure in dashboard for production
4. **Rotate keys periodically** - Update Supabase keys every 6 months
5. **Use Row Level Security (RLS)** - Protect database with Supabase policies

### ❌ Don'ts

1. **Never commit `.env` to git** - Contains sensitive credentials
2. **Never share keys publicly** - Not in screenshots, Slack, email, etc.
3. **Don't hardcode fallbacks** - Always require proper configuration
4. **Don't expose service role key** - Only use `anon` key in client
5. **Don't skip HTTPS** - Always use secure connections

---

## Troubleshooting

### "Supabase configuration is required" error in production

**Cause:** Environment variables not set in Vercel

**Fix:**
1. Go to Vercel dashboard → Settings → Environment Variables
2. Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
3. Check that variables are enabled for "Production" environment
4. Redeploy the application

### Environment variables not loading in development

**Cause:** `.env` file missing or not in project root

**Fix:**
```bash
# Check if .env exists
ls -la .env

# If missing, copy from example
cp .env.example .env

# Edit and add your credentials
nano .env  # or use your preferred editor

# Restart dev server
npm run dev
```

### "Invalid API key" error

**Cause:** Wrong Supabase key format or expired key

**Fix:**
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project: **eagagcnqzdbztxexrjqt**
3. Settings → API → Copy `anon` `public` key
4. Update your `.env` file with the correct key
5. Restart server

---

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Environment Variables Guide](https://vercel.com/docs/concepts/projects/environment-variables)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

---

## Support

If you continue to have issues:

1. Check the browser console for detailed error messages
2. Verify Supabase project is active and accessible
3. Ensure Vercel environment variables are saved and deployment is complete
4. Contact: louissader42@gmail.com or call 603-275-7513
