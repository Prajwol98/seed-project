<footer class="py-60 ">
    <img class="coin" src="assets/img/footer-coin.png" alt="">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-3 mb-4 mb-lg-0 info">
                <p>CONTACT US</p>
                <p><a href="#">info@sweepstakes.com</a></p>
                <p><a href="#" class="text-white">+1 98XXXXXXXX</a></p>
            </div>
            <div class="col-lg-6 mb-4 mb-lg-0 newsletter">
                <form action="">
                    <div class="d-flex">
                        <div class="input-group d-block flex-column">
                            <input type="text" placeholder="Enter your email address" class="form-control w-100 mb-3">
                            <div class="text-white">Get updated with our latest release and updates</div>
                        </div>
                        <div class="submit-btn">
                            <input type="submit" value="Subscribe">
                        </div>
                    </div>
                </form>
            </div>
            <div class="terms-conditions col-lg-3 mb-4 mb-lg-0">
                <ul>
                    <li>
                        <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Games</a>
                    </li>
                </ul>
            </div>
            <div class="col-12 logo mt-5 text-center d-flex justify-content-center">
                <img src="assets/img/favicon.png" alt="">
                <span class="font-primary text-white font-20 mt-2 ms-1 d-block">Sweepstakes</span>
            </div>
        </div>
    </div>
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