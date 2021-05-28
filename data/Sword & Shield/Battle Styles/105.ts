import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Honedge",
		fr: "Monorpale"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Ambush",
			fr: "Embuscade"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires."
		},

		damage: "10+",
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2
}

export default card