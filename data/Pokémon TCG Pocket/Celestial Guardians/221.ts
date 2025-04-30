import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Haunter"
	},

	illustrator: "kurumitsu",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Gastly"
	},

	description: {
		en: "It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Will-O-Wisp"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card