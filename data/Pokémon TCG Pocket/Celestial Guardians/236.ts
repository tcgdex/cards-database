import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Marowak ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Cubone"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Bonemerang"
		},

		damage: "80x",
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "Flip 2 coins. This attack does 80 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card
