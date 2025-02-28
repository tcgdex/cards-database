import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Houndour"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		en: "It is smart enough to hunt in packs. It uses a<br />variety of cries for communicating with others."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flare"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card