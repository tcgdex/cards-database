import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Hakamo-o"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	evolveFrom: {
		en: "Jangmo-o"
	},

	description: {
		en: "The scaleless, scarred parts of its body are signs of its strength. It shows them off to defeated opponents."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Dragon Claw"
		},

		damage: 60,
		cost: ["Lightning", "Fighting"]
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 2
}

export default card