import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Graveler"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	evolveFrom: {
		en: "Alolan Geodude"
	},

	description: {
		en: "When two Graveler fight each other, it fills the surroundings with flashes of light and sound. People call it the \"fireworks of the earth.\""
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heavy Impact"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card