import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'
import { Dialga, Palkia } from './Space-Time Smackdown/Boosters'

const set: Set = {
	id: "A2",

	name: {
		// de: "Unschlagbare Gene",
		en: "Space-Time Smackdown",
		// es: "Genes Formidables",
		fr: "Choc Spatio-Temporel",
		// it: "Geni Supremi",
		// pt: "Dominação Genética"
	},

	serie: serie,

	cardCount: {
		official: 140
	},

	releaseDate: "2025-01-30",

	boosters: [Dialga, Palkia]
}

export default set
