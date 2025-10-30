import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Combusken"
	},

	illustrator: "GOSSAN",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Torchic"
	},

	description: {
		en: "During a battle, the hot flame in its body increases.\nIts kicks have outstanding destructive power."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "High Jump Kick"
		},

		damage: 50,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card