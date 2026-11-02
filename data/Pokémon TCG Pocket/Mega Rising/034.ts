import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Combusken",
		fr: "Galifeu"
	},

	illustrator: "GOSSAN",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [256],
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu"
	},

	description: {
		en: "During a battle, the hot flame in its body increases.\nIts kicks have outstanding destructive power."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "High Jump Kick",
			fr: "Pied Voltige"
		},

		damage: 50,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card