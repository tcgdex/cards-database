import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Blastoise"
	},

	illustrator: "danciao",
	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Wartortle"
	},

	description: {
		en: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Hydro Pump"
		},

		damage: "80+",
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "If this Pokémon has at least 2 extra <span class=\"energy-text energy-text--type-water\"></span> Energy attached, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card
