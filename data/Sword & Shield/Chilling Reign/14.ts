import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Steenee",
		fr: "Candine"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Bounsweet",
		fr: "Croquine"
	},

	attacks: [{
		name: {
			en: "Splash",
			fr: "Trempette"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Stomp",
			fr: "Écrasement"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires."
		},

		damage: "50+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card