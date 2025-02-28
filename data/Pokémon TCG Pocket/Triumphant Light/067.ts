import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Staravia"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Starly"
	},

	description: {
		en: "Recognizing their own weakness, they always live<br />in a group. When alone, a Staravia cries noisily."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wing Attack"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card