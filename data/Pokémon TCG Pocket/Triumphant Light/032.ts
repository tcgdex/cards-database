import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Haunter"
	},

	illustrator: "Eri Yamaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Gastly"
	},

	description: {
		en: "It likes to lurk in the dark and tap shoulders<br />with a gaseous hand. Its touch causes endless<br />shuddering."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Mumble"
		},

		damage: 40,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card