var pixelArt = {
	// getHeight method is for getting the height input
	getHeight: function() {
		var field = document.getElementById('inputHeight');
		var height;
		if (field) {
			height = field.value;
		};
		return parseInt(height, 10);
	},
	// getWidth method is for getting the width input
	getWidth: function() {
		var field = document.getElementById('inputWidth');
		var width;
		if (field) {
			width = field.value;
		};
		return parseInt(width, 10);
	},
	// getColor method is for getting the color picker input
	getColor: function() {
		var field = document.getElementById('colorPicker');
		var color;
		if (field) {
			color = field.value;
		};
		return color;
	},
	// addColor method is for adding color to table cells
	addColor: function(event) {
		if (event.target.nodeName != 'TD') {
			return
		}
		event.target.style.backgroundColor = pixelArt.getColor();
	},
	// getTable is to get the table element
	getTable: function() {
		return document.getElementById('pixelCanvas');
	},
	// makeGrid method is for making the table (and clearing it on a new submit)
	makeGrid: function(event) {
		event.preventDefault();
		var table = pixelArt.getTable();
		table.innerHTML = "";
		for (var h = 0; h < pixelArt.getHeight(); h++) {
			var row = table.insertRow(-1);
			for (var w = 0; w < pixelArt.getWidth(); w++) {
				var cell = row.insertCell(0);
				cell.innerHTML = "";
			};
		};
	},
	// addFormListener function adds the event listener to the Submit button
	addFormListener: function() {
		var form = document.getElementById('sizePicker');
		form.addEventListener('submit', pixelArt.makeGrid, true);
	},
	// addClickListener adds the event listener to the color picker
	addClickListener: function() {
		pixelArt.getTable().addEventListener('click', pixelArt.addColor);
	}
};

//loads pixel art/listeners after DOM is loaded
document.addEventListener('DOMContentLoaded', function(event) {
	pixelArt.addFormListener();
	pixelArt.addClickListener();
});
