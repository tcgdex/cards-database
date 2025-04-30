import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Fletchling"
	},

	illustrator: "5ban Graphics",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "This Pokémon is normally calm, but once it enters battle, its hormonal balance changes and it becomes aggressive."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flap"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card