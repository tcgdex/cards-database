import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		en: "Exeggcute"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Tropical Swing"
		},

		damage: "40+",
		cost: ["Grass"],

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card
