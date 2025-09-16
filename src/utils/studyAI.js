/**
 * Opens Study AI+ if available, otherwise redirects to offline page
 */
export async function openStudyAI() {
  const ngrokUrl = 'https://nonspecific-claretta-excitably.ngrok-free.app/';
  const offlineUrl = '/offline.html';
  
  try {
    // Try to fetch the Ngrok URL with a timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const response = await fetch(ngrokUrl, {
      method: 'HEAD', // Use HEAD to avoid downloading content
      signal: controller.signal,
      mode: 'no-cors' // Handle CORS issues
    });
    
    clearTimeout(timeoutId);
    
    // If we get here, the URL is reachable
    window.open(ngrokUrl, '_blank', 'noopener,noreferrer');
    
  } catch (error) {
    // URL is not reachable or timed out
    console.log('Study AI+ is currently offline, redirecting to offline page');
    window.location.href = offlineUrl;
  }
}