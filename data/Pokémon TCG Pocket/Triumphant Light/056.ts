import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Mawile"
	},

	illustrator: "tetsuya koizumi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		en: "It uses its docile-looking face to lull foes into<br />complacency, then bites with its huge,<br />relentless jaws."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Iron Beam Breaker"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is a <span class=\"energy-text energy-text--type-metal\"></span> Pokémon, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card