import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Snubbull"
	},

	illustrator: "OKUBO",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "Its growls make its opponents uneasy. This\nlaid-back Pokémon tends to sleep half the day."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sharp Fang"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card