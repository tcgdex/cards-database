import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Swirlix"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "It eats its own weight in sugar every day. If it doesn't get enough sugar, it becomes incredibly grumpy."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fairy Wind"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
