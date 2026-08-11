import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mantine",
		'fr-fr': "Démanta"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [226],
	hp: 90,
	types: ["Water"],

	description: {
		'en-us': "If it builds up enough speed swimming, it\ncan jump out above the waves and glide\nfor over 300 feet.",
		'fr-fr': "Il peut planer au-dessus des vagues sur plus de 100 m en prenant son élan dans la mer."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Surf",
			'fr-fr': "Surf"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card