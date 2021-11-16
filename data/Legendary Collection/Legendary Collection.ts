import { Set } from '../../interfaces'
import serie from '../Legendary Collection'

const lc: Set = {
	id: "lc",

	name: {
		en: "Legendary Collection",
		it: "Richiamo delle Leggende",
		de: "Ruf der Legenden",
		es: "Llamada de las Leyendas", // NOTE: only went out in the TCGO
		fr: "L'Appel des Légendes"
	},

	serie: serie,
	tcgOnline: "LC",

	cardCount: {
		official: 110
	},

	releaseDate: "2002-05-24"
}

export default lc
