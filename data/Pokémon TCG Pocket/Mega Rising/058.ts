import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Corphish",
		fr: "Écrapince"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [341],
	hp: 70,
	types: ["Water"],

	description: {
		en: "It was originally a Pokémon from afar that escaped\nto the wild. It can adapt to the dirtiest river."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Gun",
			fr: "Pistolet à O"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card