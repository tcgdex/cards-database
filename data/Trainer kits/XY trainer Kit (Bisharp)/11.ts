import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Bisharp)'

const card: Card = {
	dexId: [679],
	set: Set,

	name: {
		en: "Honedge",
		fr: "Monorpale",
		es: "Honedge",
		it: "Honedge",
		pt: "Honedge",
		de: "Gramokles"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",
	retreat: 2,

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 98160
	}
}

export default card