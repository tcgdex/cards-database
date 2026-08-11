import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",

	dexId: [58],
	hp: 70,
	types: ["Fire"],

	description: {
		'en-us': "It has a brave and trustworthy nature. It fearlessly\nstands up to bigger and stronger foes.",
		'fr-fr': "Courageux et fidèle, il se dresse vaillamment devant ses ennemis même s'ils sont plus puissants que lui."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card