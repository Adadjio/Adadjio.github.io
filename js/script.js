function calc() {

	var dep = parseInt(document.getElementById("deposit").value);
	var per = parseInt(document.getElementById("percent").value);

	var p = (1 + per/100);

  var ans = document.getElementById("answer");
	ans.style.display ='block';
	ans.innerHTML = "<p>Размер вклада первый год: " + (dep * p).toFixed(2) + " руб. <br>" + 
									"Размер вклада второй год: " + (dep * p * p).toFixed(2) + " руб. <br>" + 
									"Размер вклада третий год: " + (dep * p * p * p).toFixed(2) + " руб. <br>" + 
									"Размер вклада четвертый год: " + (dep * p * p * p * p).toFixed(2) + " руб. <br>" + 
									"Размер вклада пятый год: " + (dep * p * p * p * p * p).toFixed(2) + " руб.</p>";
};