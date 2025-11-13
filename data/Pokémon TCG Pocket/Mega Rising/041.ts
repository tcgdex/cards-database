import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Litwick"
	},

	illustrator: "sowsow",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Fire"],

	description: {
		en: "The younger the life this Pokémon absorbs,\nthe brighter and eerier the flame on its\nhead burns."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flare"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card