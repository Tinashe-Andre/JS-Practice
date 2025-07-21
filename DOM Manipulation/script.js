document.createElement('script');
script.src = 'https://example.com/external-script.js';      
document.head.appendChild(script);
script.onload = function() {
    console.log('External script loaded successfully.');
};
script.onerror = function() {
    console.error('Failed to load the external script.');
};
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
});
document.addEventListener('click', function(event) {
    console.log('Document clicked:', event);
});
document.addEventListener('keydown', function(event) {  
    console.log('Key pressed:', event.key);
});
document.addEventListener('resize', function() {
    console.log('Window resized');
});
window.addEventListener('load', function() {
    console.log('Window fully loaded');
});     