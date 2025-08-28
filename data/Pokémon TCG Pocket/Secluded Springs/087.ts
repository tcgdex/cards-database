import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Entei ex"
	},

	illustrator: "Tsuyoshi Nagano",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Legendary Pulse"
		},

		effect: {
			en: "At the end of your turn, if this Pokémon is in the Active Spot, draw a card."
		}
	}],

	attacks: [{
		name: {
			en: "Blazing Beatdown"
		},

		damage: 60,
		cost: ["Fire", "Fire"],

		effect: {
			en: "If this Pokémon has at least 2 extra {R} Energy attached, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card