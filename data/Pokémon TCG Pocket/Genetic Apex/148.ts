import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Graveler"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Geodude"
	},


	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Rollout"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	description: {
		en: "It climbs up cliffs as it heads toward the peak of a mountain. As soon as it reaches the summit, it rolls back down the way it came.",
	}
}

export default card
