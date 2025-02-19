import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Graveler"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Geodude"
	},

	description: {
		en: "It climbs up cliffs as it heads toward the peak of a mountain. As soon as it reaches the summit, it rolls back down the way it came."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Lunge Out"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond"
}

export default card
