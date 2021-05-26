import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Mankey",
		fr: "Férosinge"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Focus Fist",
			fr: "Poing Concentré"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien."
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1
}

export default card