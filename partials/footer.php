<footer class="">
</footer>
<a href="javascript:void(0)" id="return-to-top">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
        <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
</a>

<!-- scripts -->


<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
</script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script type="text/javascript" src="assets/js/style.js"></script>


<script>
</script>
<script>
    AOS.init();
    // jQuery Code
    function isDivTouchingTop() {
        const divRect = $('#yellow-box')[0].getBoundingClientRect();
        const viewportTop = 0; // Top offset of the viewport (usually 0)

        return divRect.top <= viewportTop;
    }
    $(document).ready(function() {
        // Function to handle the scroll event
        function handleScroll() {
            const touchingTop = isDivTouchingTop();
            const myDiv = $('#yellow-box');
            if (touchingTop) {
                myDiv.addClass('fixed');
            } else {
                myDiv.removeClass('fixed');
            }
        }

        // Attach the scroll event listener to the window
        $(window).on('scroll', handleScroll);
    });
</script>
</body>

</html>