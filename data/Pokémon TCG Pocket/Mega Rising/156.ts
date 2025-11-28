import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Zweilous"
	},

	illustrator: "kodama",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [634],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Deino"
	},

	description: {
		en: "The two heads have different likes and dislikes.\nBecause the heads fight with each other, Zweilous\ngets stronger without needing to rely on others."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Darkness Fang"
		},

		damage: 40,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card