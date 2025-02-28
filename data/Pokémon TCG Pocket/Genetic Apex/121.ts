import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Haunter"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Gastly"
	},


	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Will-O-Wisp"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.",
	}
}

export default card
