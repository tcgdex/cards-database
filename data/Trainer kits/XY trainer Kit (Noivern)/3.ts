import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Noivern)'

const card: Card = {
	set: Set,

	name: {
		en: "Arbok",
		fr: "Arbok",
		es: "Arbok",
		it: "Arbok",
		pt: "Arbok",
		de: "Arbok"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Ekans",
		fr: "Abo",
		es: "Ekans",
		it: "Ekans",
		pt: "Ekans",
		de: "Rettan"
	},

	stage: "Stage1",
	retreat: 1,

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}]
}

export default card