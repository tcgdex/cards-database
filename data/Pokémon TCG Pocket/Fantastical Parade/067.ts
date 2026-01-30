import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Litwick"
	},

	illustrator: "saino misaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "While shining a light and pretending to be a\nguide, it leeches off the life-force of any who\nfollow it."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mumble"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card