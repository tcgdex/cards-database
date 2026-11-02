import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Pansear",
		fr: "Flamajou"
	},

	illustrator: "Jerky",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [513],
	hp: 60,
	types: ["Fire"],

	description: {
		en: "This Pokémon lives in caves in volcanoes.\nThe fire within the tuft on its head can reach\n600 degrees Fahrenheit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Beat",
			fr: "Bataille"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card