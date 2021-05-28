import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Scatterbug",
		fr: "Lépidonille"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien."
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card