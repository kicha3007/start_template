
var $range = $("#calculator__range-1"),
    $input = $("#amount"),
    instance,
    min = 1000,
    max = 3000000;

$range.ionRangeSlider({
    type: "single",
    min: min,
    max: max,
    hide_from_to: true,
    onStart: function (data) {
        $input.prop("value", data.from);
    },
    onChange: function (data) {
        $input.prop("value", data.from);
    }
});

instance = $range.data("ionRangeSlider");

$input.on("change keyup", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        from: val
    });
});

var $range2 = $("#calculator__range-2"),
    $input2 = $("#replenishment"),
    min2 = 1000,
    max2 = 3000000;

$range2.ionRangeSlider({
    type: "single",
    min: min2,
    max: max2,
    hide_from_to: true,
    onStart: function (data) {
        $input2.prop("value", data.from);
    },
    onChange: function (data) {
        $input2.prop("value", data.from);
    }
});


