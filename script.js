// script.js
document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const teddy = document.getElementById('teddy');
    const note = document.getElementById('note');
    const message = document.getElementById('message');

    // Envelope animation
    gsap.to(envelope, {
        opacity: 1,
        scale: 1,
        rotation: 360,
        duration: 2,
        onComplete: function() {
            envelope.addEventListener('click', openEnvelope);
        }
    });

    // Open envelope and show teddy
    function openEnvelope() {
        gsap.to(envelope, { opacity: 0, duration: 1 });
        gsap.to(teddy, { 
            opacity: 1, 
            scale: 1, 
            rotation: 360, 
            duration: 2, 
            ease: "back.out(2)"
        });

        // Show note after teddy appears
        gsap.to(teddy, {
            onComplete: function() {
                gsap.to(note, {
                    opacity: 1,
                    scale: 1,
                    duration: 2,
                    ease: "back.out(2)"
                });
            }
        });
    }

    // Clicking the note opens the message
    note.addEventListener('click', function() {
        gsap.to(message, {
            opacity: 1,
            y: 0,
            duration: 1
        });
    });
});
