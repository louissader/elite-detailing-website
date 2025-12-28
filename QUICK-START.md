# ⚡ QUICK START - 3 Steps to Get Your Booking System Live

## ✅ Step 1: Create the Database Table (2 minutes)

1. Go to https://supabase.com/dashboard
2. Click **SQL Editor** (left sidebar)
3. Click **New Query**
4. Open the file `database-schema.sql` in this project
5. **Copy ALL the code** from that file
6. **Paste** it into the Supabase SQL Editor
7. Click **RUN** button
8. You should see: ✅ "Success. No rows returned"

Done! Your database table is created.

---

## ✅ Step 2: Start Your Website (1 minute)

In your terminal, run:

```bash
npm run dev
```

**Important:** The `.env` file is already configured with your Supabase credentials!

Your website should open at: http://localhost:5174

---

## ✅ Step 3: Test It Works (1 minute)

1. On your website, click **"Book Now"**
2. Fill out the booking form:
   - Select a service package
   - Choose a date and time
   - Enter customer info
3. Click **"Confirm Booking"**
4. You should see a success message!

### Verify in Supabase:
1. Go back to https://supabase.com/dashboard
2. Click **Table Editor** (left sidebar)
3. Click the **"bookings"** table
4. You should see your test booking! 🎉

---

## 🎉 That's It - You're Done!

Your booking system is now:
- ✅ Storing real data in the database
- ✅ Ready for customers to use
- ✅ Scalable and secure

---

## 🌐 Deploy to Production (Optional - 5 minutes)

### Add Environment Variables to Vercel:

1. Go to https://vercel.com/dashboard
2. Select your project
3. Click **Settings** → **Environment Variables**
4. Add these 2 variables:

**Variable 1:**
- Name: `VITE_SUPABASE_URL`
- Value: `https://eagagcnqzdbztxexrjqt.supabase.co`

**Variable 2:**
- Name: `VITE_SUPABASE_ANON_KEY`
- Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZ2FnY25xemRienR4ZXhyanF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5NTEzMjgsImV4cCI6MjA4MjUyNzMyOH0.LjxQ6lJVBUa2Ha2aELY_-fVIi4jQVlSLWh0IiTuBEJY`

5. Click **Save**
6. Go to **Deployments** → Three dots → **Redeploy**
7. Done! Your live site now has booking enabled.

---

## 📊 View Your Bookings

Anytime you want to see bookings:

1. Go to https://supabase.com/dashboard
2. Click **Table Editor** → **bookings**
3. See all bookings with full details

You can:
- Export to CSV
- Update booking status
- Add internal notes
- Filter by date/customer

---

## 🆘 Problems?

### Test the connection:
```bash
npm run test:supabase
```

This will tell you if your database is set up correctly.

### Common Issues:

**"Table doesn't exist"**
- Run the SQL from `database-schema.sql` again in Supabase

**"Cannot connect to Supabase"**
- Make sure you restarted your dev server: `npm run dev`
- Check that `.env` file exists in project root

**Still stuck?**
- Check `SETUP-GUIDE.md` for detailed troubleshooting
- Or contact me for help!

---

## 📚 More Information

- **SETUP-GUIDE.md** - Detailed step-by-step guide
- **supabase-setup.md** - Technical documentation
- **README.md** - Full project documentation

---

**Questions?** Open `SETUP-GUIDE.md` for more detailed instructions!
