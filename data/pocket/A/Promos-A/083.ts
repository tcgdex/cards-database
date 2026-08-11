import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Stufful",
		'es-es': "Stufful"
	},

	illustrator: "Kanako Eo",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [759],
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "Its fluffy fur is a delight to pet, but carelessly reaching out\nto touch this Pokémon could result in painful retaliation.",
		'es-es': "Su suave pelaje invita a acariciarlo, pero quien cometa\nsemejante temeridad recibirá un severo escarmiento."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Ram",
			'es-es': "Apisonar"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: []
}

export default card