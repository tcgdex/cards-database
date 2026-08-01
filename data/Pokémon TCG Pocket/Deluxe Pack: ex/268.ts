import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Dratini"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		en: "It sheds many layers of skin as it grows larger.\nDuring this process, it is protected by a rapid\nwaterfall."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Beat"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 1
}

export default card