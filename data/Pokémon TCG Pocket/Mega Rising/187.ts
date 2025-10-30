import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Miltank"
	},

	illustrator: "saino misaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "This Pokémon needs to be milked every day,\nor else it will fall ill. The flavor of Miltank milk\nchanges with the seasons."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Body Slam"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card