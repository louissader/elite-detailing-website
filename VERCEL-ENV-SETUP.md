# Vercel Environment Variables Setup - Quick Guide

## 🚨 IMPORTANT: Action Required After v1.6.0 Deployment

The website **will not work** in production until you set environment variables in Vercel.

---

## Step-by-Step Instructions

### 1. Go to Vercel Dashboard
Visit: https://vercel.com/dashboard

### 2. Select Your Project
Click on: **elite-detailing-website**

### 3. Open Settings
Click: **Settings** (top navigation bar)

### 4. Navigate to Environment Variables
Left sidebar → **Environment Variables**

### 5. Add Variables

Click **"Add New"** and enter:

#### Variable 1: Supabase URL
```
Name:        VITE_SUPABASE_URL
Value:       https://eagagcnqzdbztxexrjqt.supabase.co
Environments: ✅ Production  ✅ Preview  ✅ Development
```

Click **Save**

#### Variable 2: Supabase Anon Key
```
Name:        VITE_SUPABASE_ANON_KEY
Value:       eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZ2FnY25xemRienR4ZXhyanF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5NTEzMjgsImV4cCI6MjA4MjUyNzMyOH0.LjxQ6lJVBUa2Ha2aELY_-fVIi4jQVlSLWh0IiTuBEJY
Environments: ✅ Production  ✅ Preview  ✅ Development
```

Click **Save**

### 6. Redeploy

After adding variables:
1. Go to **Deployments** tab
2. Find the most recent deployment
3. Click **⋯** (three dots menu)
4. Select **"Redeploy"**
5. Confirm the redeployment

---

## Verification

After redeployment completes (usually 1-2 minutes):

1. Visit your production URL: https://your-domain.vercel.app
2. Navigate to `/booking`
3. Try creating a test booking
4. If successful → ✅ Configuration complete!
5. If error → Check browser console for details

---

## Visual Guide

```
Vercel Dashboard
    ↓
[Your Project]
    ↓
Settings → Environment Variables
    ↓
Add New →
    Name: VITE_SUPABASE_URL
    Value: https://eagagcnqzdbztxexrjqt.supabase.co
    Environments: [x] Production [x] Preview [x] Development
    ↓
Save
    ↓
Add New →
    Name: VITE_SUPABASE_ANON_KEY
    Value: eyJhbGci... (full key)
    Environments: [x] Production [x] Preview [x] Development
    ↓
Save
    ↓
Deployments → Latest → [...] → Redeploy
```

---

## Expected Behavior

### ✅ After Correct Setup
- Booking page loads normally
- Can submit bookings successfully
- No console errors about configuration
- Supabase connection works

### ❌ If Not Configured
- Page shows error boundary
- Console error: "Supabase configuration is required"
- App refuses to run in production
- Booking submission fails

---

## Troubleshooting

### Variables not showing up after save

**Solution:** Ensure you selected all three environments:
- ✅ Production
- ✅ Preview
- ✅ Development

### Deployment still failing

**Solution:**
1. Delete the old variables
2. Re-add them with correct values
3. Wait 30 seconds
4. Redeploy again

### Can't find environment variables section

**Solution:**
1. Make sure you're in the correct project
2. Check you have admin/owner permissions
3. Try refreshing the Vercel dashboard

---

## Support

Questions? Contact:
- Email: louissader42@gmail.com
- Phone: 603-275-7513

---

## Additional Documentation

See [SECURITY-SETUP.md](./SECURITY-SETUP.md) for comprehensive security guide.
