import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Drowzee"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "It remembers every dream it eats. It rarely eats\nthe dreams of adults because children's are much\ntastier."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mumble"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card