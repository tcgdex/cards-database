import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Celebi"
	},

	illustrator: "Yuu Nishida",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		en: "This Pokémon wanders across time. Grass and trees\nflourish in the forests in which it has appeared."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Temporal Leaves"
		},

		damage: 40,
		cost: ["Grass", "Grass"],

		effect: {
			en: "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card