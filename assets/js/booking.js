/* ============================================
   ESCAPE HOUSE — BOOKING SYSTEM
   Supabase Integration
   ============================================ */

const SUPABASE_URL = 'https://hpbtlrkjmyejzqyntstn.supabase.co';
const SUPABASE_KEY = 'sb_publishable_lP3Tzy64JvDXosu7bRaYQg_AuKYn0rv';

async function submitBooking(formData) {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    return { success: false };
  }
}

// --- SPA BOOKING ---
const spaForm = document.getElementById('spaBookingForm');
if (spaForm) {
  spaForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const result = await submitBooking({
      name: this.querySelector('[name="name"]').value,
      phone: this.querySelector('[name="phone"]').value,
      email: this.querySelector('[name="email"]').value,
      service: this.querySelector('[name="service"]').value,
      date: this.querySelector('[name="date"]').value,
      message: this.querySelector('[name="message"]').value,
      branch: 'spa'
    });

    if (result.success) {
      btn.textContent = 'Booking Sent!';
      btn.style.background = '#25D366';
      spaForm.reset();
    } else {
      btn.textContent = 'Try Again';
      btn.disabled = false;
    }
  });
}

// --- HOTEL BOOKING ---
const stayForm = document.getElementById('stayBookingForm');
if (stayForm) {
  stayForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const result = await submitBooking({
      name: this.querySelector('[name="name"]').value,
      phone: this.querySelector('[name="phone"]').value,
      email: this.querySelector('[name="email"]').value,
      service: this.querySelector('[name="service"]').value,
      date: this.querySelector('[name="date"]').value,
      message: this.querySelector('[name="message"]').value,
      branch: 'hotel'
    });

    if (result.success) {
      btn.textContent = 'Booking Sent!';
      btn.style.background = '#25D366';
      stayForm.reset();
    } else {
      btn.textContent = 'Try Again';
      btn.disabled = false;
    }
  });
}

// --- RESTAURANT BOOKING ---
const diningForm = document.getElementById('diningBookingForm');
if (diningForm) {
  diningForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const result = await submitBooking({
      name: this.querySelector('[name="name"]').value,
      phone: this.querySelector('[name="phone"]').value,
      email: this.querySelector('[name="email"]').value,
      service: this.querySelector('[name="service"]').value,
      date: this.querySelector('[name="date"]').value,
      message: this.querySelector('[name="message"]').value,
      branch: 'restaurant'
    });

    if (result.success) {
      btn.textContent = 'Reservation Sent!';
      btn.style.background = '#25D366';
      diningForm.reset();
    } else {
      btn.textContent = 'Try Again';
      btn.disabled = false;
    }
  });
}

// --- SALON BOOKING ---
const salonForm = document.getElementById('salonBookingForm');
if (salonForm) {
  salonForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const result = await submitBooking({
      name: this.querySelector('[name="name"]').value,
      phone: this.querySelector('[name="phone"]').value,
      email: this.querySelector('[name="email"]').value,
      service: this.querySelector('[name="service"]').value,
      date: this.querySelector('[name="date"]').value,
      message: this.querySelector('[name="message"]').value,
      branch: 'salon'
    });

    if (result.success) {
      btn.textContent = 'Booking Sent!';
      btn.style.background = '#25D366';
      salonForm.reset();
    } else {
      btn.textContent = 'Try Again';
      btn.disabled = false;
    }
  });
}

// --- CODED BOOKING ---
const codedForm = document.getElementById('codedBookingForm');
if (codedForm) {
  codedForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const result = await submitBooking({
      name: this.querySelector('[name="name"]').value,
      phone: this.querySelector('[name="phone"]').value,
      email: this.querySelector('[name="email"]').value,
      service: this.querySelector('[name="service"]').value,
      date: this.querySelector('[name="date"]').value,
      message: this.querySelector('[name="message"]').value,
      branch: 'coded'
    });

    if (result.success) {
      btn.textContent = 'Request Sent!';
      btn.style.background = '#25D366';
      codedForm.reset();
    } else {
      btn.textContent = 'Try Again';
      btn.disabled = false;
    }
  });
}