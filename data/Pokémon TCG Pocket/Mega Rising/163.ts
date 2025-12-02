import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Impidimp"
	},

	illustrator: "Rianti Hidayat",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [859],
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "They live in groups, pestering and playing pranks\non each other to polish their troublemaking skills."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card