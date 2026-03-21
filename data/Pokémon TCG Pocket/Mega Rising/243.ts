import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Pancham"
	},

	illustrator: "Yukihiro Tada",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [674],
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "Wanting to make sure it's taken seriously,\nPancham's always giving others a glare.\nBut if it's not focusing, it ends up smiling."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Punch"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-gyarados"]
}

export default card