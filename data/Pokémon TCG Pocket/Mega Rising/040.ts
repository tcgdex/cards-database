import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Darmanitan"
	},

	illustrator: "kawayoo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Darumaka"
	},

	description: {
		en: "This Pokémon's power level rises along with the\ntemperature of its fire, which can reach 2,500\ndegrees Fahrenheit."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Darmani-Hands"
		},

		damage: 80,
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 30 more damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card