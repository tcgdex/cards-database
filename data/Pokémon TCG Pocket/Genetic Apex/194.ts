import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Wigglytuff"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Jigglypuff"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hyper Voice"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.",
	}
}

export default card
