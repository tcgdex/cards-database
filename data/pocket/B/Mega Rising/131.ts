import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Krokorok"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [552],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Sandile"
	},

	description: {
		en: "Thanks to the special membrane covering its\neyes, it can see its surroundings clearly, even in\nthe middle of the night."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bite"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card