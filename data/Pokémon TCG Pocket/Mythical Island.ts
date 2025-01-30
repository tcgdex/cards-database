import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A1a",

	name: {
		// de: "Unschlagbare Gene",
		en: "Mythical Island",
		// es: "Genes Formidables",
		// fr: "Puissance Génétique",
		// it: "Geni Supremi",
		// pt: "Dominação Genética"
	},

	serie: serie,

	cardCount: {
		official: 68
	},

	// data fetched from the Pokemon TCG Pocket app
	pullRates: {
		'normal': {
			rate: 99.95,
			slots: [
				{ 'One Diamond': 100 },
				{ 'One Diamond': 100 },
				{ 'One Diamond': 100 },
				{
					'Crown': 0.04,
					'Three Star': 0.222,
					'Two Star': 0.5,
					'One Star': 2.572,
					'Four Diamond': 1.666,
					'Three Diamond': 5,
					'Two Diamond': 90
				},
				{
					'Crown': 0.16,
					'Three Star': 0.888,
					'Two Star': 2,
					'One Star': 10.288,
					'Four Diamond': 6.664,
					'Three Diamond': 20,
					'Two Diamond': 60
				}
			]
		},
		godpack: {
			rate: 0.05,
			slots: [
				{
					'Crown': 5,
					'Three Star': 5,
					'Two Star': 50,
					'One Star': 40
				}
			]
		}
	},

	releaseDate: "2024-12-17"
}

export default set
