import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Noivern)'

const card: Card = {
	dexId: [23],
	set: Set,

	name: {
		en: "Ekans",
		fr: "Abo",
		es: "Ekans",
		it: "Ekans",
		pt: "Ekans",
		de: "Rettan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 2,

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}]
}

export default card