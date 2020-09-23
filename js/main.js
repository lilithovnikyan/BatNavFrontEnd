$(document).ready(function() {
    if($(".Switch").length !== 0) {
        $('.Switch').click(function() {
            if ($(this).hasClass('On')){
                $(this).parent().find('input:checkbox').attr('checked', true);
                $(this).removeClass('On').addClass('Off');
            } else {
                $(this).parent().find('input:checkbox').attr('checked', false);
                $(this).removeClass('Off').addClass('On');
            }
        });
        $('.Switch').each(function() {
            if ($(this).parent().find('input:checkbox').length){
                if (!$(this).parent().find('input:checkbox').hasClass("show")){ $(this).parent().find('input:checkbox').hide(); }
                if ($(this).parent().find('input:checkbox').is(':checked')){
                    $(this).removeClass('On').addClass('Off');
                } else {
                    $(this).removeClass('Off').addClass('On');
                }
            }
        });
    }
    if($("#sortable").length !== 0) {
        $("#sortable").sortable();
        $("#sortable").disableSelection();

        $("#btn").on("click", function () {
            var x = "";
            $("#sortable li").each(function (index, element) {
                x = x + $(this).text() + " , ";
            });
            $(".show").text(x);
        });
    }
    if($(".accordion-panel").length !== 0) {
        var accHeading = document.querySelectorAll(".accordion");
        var accPanel = document.querySelectorAll(".accordion-panel");

        for (var i = 0; i < accHeading.length; i++) {
            // Execute whenever an accordion is clicked
            accHeading[i].onclick = function() {
                if (this.nextElementSibling.style.maxHeight) {
                    hidePanels();     // Hide All open Panels
                } else {
                    showPanel(this);  // Show the panel
                }
            };
        }
        // Function to Show a Panel
        function showPanel(elem) {
            hidePanels();
            elem.classList.add("active");
            elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
        }
        // Function to Hide all shown Panels
        function hidePanels() {
            for (var i = 0; i < accPanel.length; i++) {
                accPanel[i].style.maxHeight = null;
                accHeading[i].classList.remove("active");
            }
        }
    }
    if($(".authenticate-send").length !== 0) {
        $('.authenticate-send').click(function() {
            $('.authenticate-text-3').css('display', 'none');
            $('.authenticate-send').css('display', 'none');
            $('.authenticate-text-4').css('display', 'flex');
            $('.authenticate-verify').css('display', 'flex');
            $('.authenticate-text-5').css('display', 'flex');
        });
    }
    if($(".battery-info-item").length !== 0) {
        $('.battery-info-item').click(function() {
            $('.battery-info-item').removeClass('battery-info-item-active');
            $(this).toggleClass('battery-info-item-active');
        });
    }

});