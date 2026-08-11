import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Pinsir ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [127],
	hp: 170,
	types: ["Grass"],

	description: {
		'en-us': "The influence of Mega Evolution leaves it in a\nstate of constant excitement. It pierces enemies\nwith its two large horns before shredding them."
	},

	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Critical Scissors"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 70 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-blaziken"]
}

export default card