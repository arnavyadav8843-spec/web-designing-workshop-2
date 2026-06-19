function calculateSI() {
            var p = document.getElementById("principal").value;
            var r = document.getElementById("rate").value;
            var t = document.getElementById("time").value;

            var si = (p * r * t) / 100;

            document.getElementById("result").innerHTML = "Simple Interest = " + si;
        }