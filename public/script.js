function calculateStatistics() {
    var valuesInput = document.getElementById("values");
    var values = valuesInput.value.split(",");
    var sum = 0;
    
    for (var i = 0; i < values.length; i++) {
      sum += parseFloat(values[i]);
    }
    
    var mean = sum / values.length;
    var variance = 0;
    
    for (var i = 0; i < values.length; i++) {
      variance += Math.pow(parseFloat(values[i]) - mean, 2);
    }
    
    variance = variance / values.length;
    var standardDeviation = Math.sqrt(variance);
    
    var meanResult = document.getElementById("meanResult");
    meanResult.textContent = mean.toFixed(2);
    
    var varianceResult = document.getElementById("varianceResult");
    varianceResult.textContent = variance.toFixed(2);
    
    var standardDeviationResult = document.getElementById("standardDeviationResult");
    standardDeviationResult.textContent = standardDeviation.toFixed(2);
  }