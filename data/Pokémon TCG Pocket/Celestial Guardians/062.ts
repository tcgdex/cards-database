import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Helioptile"
	},

	illustrator: "0313",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "When spread, the frills on its head act like solar panels, generating the power behind this Pokémon's electric moves."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Smash Kick"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card