import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Pinsir ex"
	},

	illustrator: "Krgc",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [127],
	hp: 170,
	types: ["Grass"],

	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Critical Scissors"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 70 more damage."
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