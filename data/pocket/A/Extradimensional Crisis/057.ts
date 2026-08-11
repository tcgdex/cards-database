import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [759],
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "Its fluffy fur is a delight to pet, but carelessly reaching out\nto touch this Pokémon could result in painful retaliation.",
		'fr-fr': "Sa fourrure duveteuse est très agréable à caresser, mais ceux qui la touchent sans prévenir s'exposent à une correction brutale."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card