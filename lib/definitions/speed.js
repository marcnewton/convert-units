var metric, imperial;

metric = {

	'km/h': {
		name: {
			singular: 'Kilometre per hour',
			plural: 'Kilometres per hour'
		},
		to_anchor: 1
	},

	'm/s': {
		name: {
			singular: 'Metre per second',
			plural: 'Metres per second'
		},
		to_anchor: 3.6
	},

	'cm/m': {
		name: {
			singular: 'Centimeter per minute',
			plural: 'Centimeters per minute'
		},
		to_anchor: 0.0006
	},
	
	'mm/m': {
		name: {
			singular: 'Millimeter per minute',
			plural: 'Millimeters per minute'
		},
		to_anchor: 0.00006
	},
	
};

imperial = {
	'm/h': {
		name: {
			singular: 'Mile per hour',
			plural: 'Miles per hour'
		},
		to_anchor: 1
	},
  
	knot: {
		name: {
			singular: 'Knot',
			plural: 'Knots'
		},
		to_anchor: 1.150779
	},
  
	'ft/s': {
		name: {
			singular: 'Foot per second',
			plural: 'Feet per second'
		},
		to_anchor: 0.681818
	},
  
	'ft/m': {
		name: {
			singular: 'Foot per minute',
			plural: 'Feet per minute'
		},
		to_anchor: 0.01136363
	},
  
	'in/m': {
		name: {
			singular: 'Inches per minute',
			plural: 'Inches per minute'
		},
		to_anchor: 0.00094697
	},
};

module.exports = {
	metric: metric,
	imperial: imperial,
	_anchors: {
		metric: {
			unit: 'km/h',
			ratio: 1 / 1.609344
		},
		imperial: {
			unit: 'm/h',
			ratio: 1.609344
		}
	}
};
