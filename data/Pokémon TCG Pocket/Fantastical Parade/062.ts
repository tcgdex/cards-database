import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [210],

	name: {
		en: "Granbull"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Snubbull"
	},

	description: {
		en: "It can make most any Pokémon run away\nby opening its big mouth to reveal its\nthick fangs."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Strength"
		},

		damage: 90,
		cost: ["Psychic", "Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card