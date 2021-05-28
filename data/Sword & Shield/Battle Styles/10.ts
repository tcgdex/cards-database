import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Durant",
		fr: "Fermite"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Vise Grip",
			fr: "Force Poigne"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			en: "Devour",
			fr: "Voracité"
		},

		effect: {
			en: "For each of your Durant in play, discard the top card of your opponent’s deck.",
			fr: "Pour chacun de vos Fermite en jeu, défaussez la carte du dessus du deck de votre adversaire."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card