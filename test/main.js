function bmi(height, weight) {
    var height = document.querySelector("input[name='height']").value;
    var weight = document.querySelector("input[name='weight']").value;
    var result = document.querySelector("#result");
    var r = Math.round((weight * 703) / Math.pow(height, 2));
    result.textContent = r;
}