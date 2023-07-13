fetch('https://www.google.com/maps/contrib/104069121239645335715/photos/@42.7575299,-76.3176244,6z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu')
  .then(response => response.text())
  .then(html => {
    const viewCount = extractViewCount(html);
    if (viewCount !== null) {
      console.log('Number of photo views:', viewCount);
      document.getElementById('viewCounter').textContent = viewCount;
    } else {
      console.log('View count not found.');
    }
  })
  .catch(error => {
    console.error('Error fetching photo page:', error);
  });

function extractViewCount(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  const viewCountElement = doc.querySelector('.Qha3nb[aria-label*="views"]');
  if (viewCountElement) {
    const ariaLabel = viewCountElement.getAttribute('aria-label');
    const regex = /(\d{1,3}(?:,\d{3})*)(?:\s*views)/;
    const matches = regex.exec(ariaLabel);
    if (matches && matches[1]) {
      const viewCount = matches[1].replace(/,/g, ''); // Remove commas from the extracted number
      return parseInt(viewCount);
    }
  }

  return null; // View count not found or extraction unsuccessful
}