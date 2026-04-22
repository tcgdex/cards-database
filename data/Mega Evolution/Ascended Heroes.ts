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

	pullRates: {
		rarities: {
			'Double rare':                   { display: '1 in 5',   percent: 20 },
			'Illustration rare':             { display: '1 in 9',   percent: 11.11 },
			'Ultra Rare':                    { display: '1 in 21',  percent: 4.76 },
			'Mega Attack Rare':              { display: '1 in 29',  percent: 3.45 },
			'Special illustration rare':     { display: '1 in 70',  percent: 1.43 },
			'Mega Hyper Rare':               { display: '1 in 540', percent: 0.19 },
		},
		// specialVariants omitted — reverse foils are fixed guaranteed slots
		// per card, not probabilistic pull rates
	}
}

export default set
