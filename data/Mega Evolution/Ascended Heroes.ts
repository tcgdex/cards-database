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
      'Common':              '3 in 5',
      'Uncommon':            '1 in 5',
      'Rare':                '1 in 5',
      'Double rare':         '1 in 5',
      'Illustration rare':   '1 in 9',
      'Ultra Rare':          '1 in 12',
      'Special illustration rare': '1 in 78',
      'Hyper rare':          '1 in 200',
    },
    specialVariants: [
      {
        match: { type: 'reverse', foil: 'pokeball' },
        rate: '1 in 40'
      },
      {
        match: { type: 'reverse', foil: 'energy' },
        rate: '1 in 4'
      }
    ]
  },
}

export default set
