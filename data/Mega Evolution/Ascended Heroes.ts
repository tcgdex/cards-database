import { Set } from '../../interfaces'
import serie from '../Mega Evolution'

const set: Set = {
	id: "me02.5",

	name: {
		de: "Erhabene Helden",
		en: "Ascended Heroes",
		es: "Héroes Ascendentes",
		'es-mx': 'Ascenso Heroico',
		fr: "Héros Transcendants",
		it: "Ascesa Eroica",
		pt: "Heróis Excelsos"
	},

	serie: serie,

	cardCount: {
		official: 217
	},

	releaseDate: "2026-01-30",

	abbreviations: {
		official: "ASC",
		fr: "HER"
	},

	thirdParty: {
		cardmarket: 6395,
		tcgplayer: 24541
	},

  	// Arbitary data for testing 
	pullRates: {
		rarities: {
			'Common':   					{ display: '3 in 5', percent: 60 },
			'Uncommon': 					{ display: '1 in 5', percent: 20 },
			'Rare':     					{ display: '1 in 5', percent: 20 },
			'Double rare': 					{ display: '1 in 5', percent: 20 },
			'Illustration rare': 			{ display: '1 in 9', percent: 11.11 },
			'Ultra Rare': 					{ display: '1 in 12', percent: 8.33 },
			'Special illustration rare': 	{ display: '1 in 78', percent: 1.28 },
			'Hyper rare': 					{ display: '1 in 200', percent: 0.5 },
		},
		specialVariants: [
			{ match: { type: 'reverse', foil: 'pokeball' }, rate: { display: '1 in 40', percent: 2.5 } },
			{ match: { type: 'reverse', foil: 'energy' }, rate: { display: '1 in 4', percent: 25 } }
		]
	}
}

export default set
