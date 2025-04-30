import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Lunatone"
	},

	illustrator: "Hisao Nakamura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		en: "The phase of the moon apparently has some effect on its power. It's active on the night of a full moon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Moon Press"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card