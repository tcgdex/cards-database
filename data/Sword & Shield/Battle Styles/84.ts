import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Stonjourner",
		fr: "Dolman"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Land’s Pulse",
			fr: "Vibration Terrestre"
		},

		effect: {
			en: "If a Stadium is in play, this attack does 30 more damage.",
			fr: "Si un Stade est en jeu, cette attaque inflige 30 dégâts supplémentaires."
		},

		damage: "30+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			en: "Giga Hammer",
			fr: "Giga Marteau"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t use Giga Hammer.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Giga Marteau."
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card