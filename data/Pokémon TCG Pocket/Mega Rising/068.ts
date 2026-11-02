import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Frillish",
		fr: "Viskuse"
	},

	illustrator: "Apios",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [592],
	hp: 60,
	types: ["Water"],

	description: {
		en: "Legend has it that the residents of a sunken\nancient city changed into these Pokémon."
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

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card