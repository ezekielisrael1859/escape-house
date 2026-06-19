/* ============================================
   ESCAPE HOUSE — BOOKING SYSTEM
   Supabase + WhatsApp
   ============================================ */

const SUPABASE_URL = 'https://hpbtlrkjmyejzqyntstn.supabase.co';
const SUPABASE_KEY = 'sb_publishable_lP3Tzy64JvDXosu7bRaYQg_AuKYn0rv';

async function saveToSupabase(data) {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(data)
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}

function sendToWhatsApp(phone, data) {
  const message =
`🏨 *NEW BOOKING — Escape House ${data.branch.toUpperCase()}*

*Name:* ${data.name}
*Phone:* ${data.phone}
*Email:* ${data.email}
*Service:* ${data.service}
*Date:* ${data.date}
*Message:* ${data.message || 'None'}

_Sent from Escape House Website_`;

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}

async function handleBooking(formEl, phone, branch) {
  const data = {
    name: formEl.querySelector('[name="name"]').value,
    phone: formEl.querySelector('[name="phone"]').value,
    email: formEl.querySelector('[name="email"]').value,
    service: formEl.querySelector('[name="service"]').value,
    date: formEl.querySelector('[name="date"]').value,
    message: formEl.querySelector('[name="message"]').value,
    branch: branch
  };

  const btn = formEl.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  await saveToSupabase(data);
  sendToWhatsApp(phone, data);

  btn.textContent = 'Booking Sent!';
  btn.style.background = '#25D366';
  formEl.reset();

  setTimeout(() => {
    btn.textContent = btn.getAttribute('data-original');
    btn.style.background = '';
    btn.disabled = false;
  }, 4000);
}

/* --- SPA --- */
const spaForm = document.getElementById('spaBookingForm');
if (spaForm) {
  spaForm.querySelector('button[type="submit"]').setAttribute('data-original', 'Request Booking');
  spaForm.addEventListener('submit', function(e) {
    e.preventDefault();
    handleBooking(this, '2348099224450', 'Spa');
  });
}

/* --- HOTEL --- */
const stayForm = document.getElementById('stayBookingForm');
if (stayForm) {
  stayForm.querySelector('button[type="submit"]').setAttribute('data-original', 'Request Reservation');
  stayForm.addEventListener('submit', function(e) {
    e.preventDefault();
    handleBooking(this, '2348099224450', 'Hotel');
  });
}

/* --- RESTAURANT --- */
const diningForm = document.getElementById('diningBookingForm');
if (diningForm) {
  diningForm.querySelector('button[type="submit"]').setAttribute('data-original', 'Request Reservation');
  diningForm.addEventListener('submit', function(e) {
    e.preventDefault();
    handleBooking(this, '2348099224466', 'Restaurant');
  });
}

/* --- SALON --- */
const salonForm = document.getElementById('salonBookingForm');
if (salonForm) {
  salonForm.querySelector('button[type="submit"]').setAttribute('data-original', 'Request Booking');
  salonForm.addEventListener('submit', function(e) {
    e.preventDefault();
    handleBooking(this, '2348099224450', 'Salon');
  });
}

/* --- CODED --- */
const codedForm = document.getElementById('codedBookingForm');
if (codedForm) {
  codedForm.querySelector('button[type="submit"]').setAttribute('data-original', 'Submit Request');
  codedForm.addEventListener('submit', function(e) {
    e.preventDefault();
    handleBooking(this, '2349033333733', 'Coded Escape House');
  });
}