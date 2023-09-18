$(document).ready(function() {
    function e() {
        $("header").removeClass("nav-up").addClass("nav-down");
        var e = {
            labels: [ "Appreciative", "Co-creative", "Transformative", "Imaginative", "Values-based", "Experience focused" ],
            datasets: [ {
                label: "ACTIVE",
                fillColor: "rgba(0,0,0,0.2)",
                strokeColor: "rgba(0,0,0,1)",
                pointColor: "rgba(0,0,0,1)",
                pointStrokeColor: "#000",
                pointHighlightFill: "#000",
                pointHighlightStroke: "rgba(0,0,0,1)",
                data: [ Math.round(parseFloat($("input:radio[name=appreciative1]:checked").val()) + parseFloat($("input:radio[name=appreciative2]:checked").val()) + parseFloat($("input:radio[name=appreciative3]:checked").val())), Math.round(parseFloat($("input:radio[name=cocreative1]:checked").val()) + parseFloat($("input:radio[name=cocreative2]:checked").val()) + parseFloat($("input:radio[name=cocreative3]:checked").val())), Math.round(parseFloat($("input:radio[name=transformative1]:checked").val()) + parseFloat($("input:radio[name=transformative2]:checked").val()) + parseFloat($("input:radio[name=transformative3]:checked").val())), Math.round(parseFloat($("input:radio[name=imaginative1]:checked").val()) + parseFloat($("input:radio[name=imaginative2]:checked").val()) + parseFloat($("input:radio[name=imaginative3]:checked").val())), Math.round(parseFloat($("input:radio[name=valuebased1]:checked").val()) + parseFloat($("input:radio[name=valuebased2]:checked").val()) + parseFloat($("input:radio[name=valuebased3]:checked").val())), Math.round(parseFloat($("input:radio[name=experiencefocused1]:checked").val()) + parseFloat($("input:radio[name=experiencefocused2]:checked").val()) + parseFloat($("input:radio[name=experiencefocused3]:checked").val())) ]
            } ]
        };
        window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(e, {
            pointLabelFontSize: 16,
            pointLabelFontColor: "#0a81ea",
            responsive: !0,
            scaleOverride: !0,
            scaleStartValue: 0,
            scaleSteps: 10,
            scaleStepWidth: 10,
            showTooltips: !1
        }), $("#getactiveform").fadeToggle(90, "linear"), setTimeout(function() {
            $("#result").fadeToggle("slow", "linear"), $("#print").fadeToggle("slow", "linear");
        }, 100), setTimeout(function() {
            window.myRadar.resize(), window.myRadar.render(), window.myRadar.update();
        }, 105);
    }
    $("#continue").click(function() {
        $("#intro").fadeToggle(100, "linear"), setTimeout(function() {
            $(".form").fadeToggle("slow", "linear");
        }, 101);
    }), $(".form .stages label").click(function() {
        var e = $(".form input:radio"), a = e.index(e.filter(":checked"));
        a += 1;
    }), $(".to1").click(function() {
        $("#one").prop("checked", !0);
    }), $(".to2").click(function() {
        $("#two").prop("checked", !0);
    }), $(".to3").click(function() {
        $("#three").prop("checked", !0);
    }), $(".to4").click(function() {
        $("#four").prop("checked", !0);
    }), $(".to5").click(function() {
        $("#five").prop("checked", !0);
    }), $(".to6").click(function() {
        $("#six").prop("checked", !0);
    }), $(".to7").click(function() {
        e();
    }), $("#print").hide(), $("#print").click(function() {
        window.print();
    });
});