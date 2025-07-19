document.addEventListener('DOMContentLoaded', async function () {
  const container = document.getElementById('theatre-data');
  container.innerHTML = '<p>Loading booking data...</p>';

  try {
    const snapshot = await db.collection("bookings").get();

    if (snapshot.empty) {
      container.innerHTML = '<p>No bookings found.</p>';
      return;
    }

    container.innerHTML = '';
    snapshot.forEach(doc => {
      const data = doc.data();
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h2>${data.movieTitle || 'Unknown Movie'}</h2>
        <p><strong>Theatre:</strong> ${data.theatreName || 'N/A'}</p>
        <p><strong>Showtime:</strong> ${data.showtime || 'N/A'}</p>
        <p><strong>Booked Seats:</strong> ${data.seats ? data.seats.join(', ') : 'N/A'}</p>
        <p><strong>Price:</strong> ₹${data.price || 'N/A'}</p>
        <p><strong>Booked By:</strong> ${data.user || 'N/A'}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading bookings:", error);
    container.innerHTML = '<p>Error loading data. Check console for details.</p>';
  }
});