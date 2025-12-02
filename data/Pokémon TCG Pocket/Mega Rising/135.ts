import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Golett"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [622],
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "This Pokémon was created from clay. It received\norders from its master many thousands of years\nago, and it still follows those orders to this day."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stampede"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-blaziken"]
}

export default card