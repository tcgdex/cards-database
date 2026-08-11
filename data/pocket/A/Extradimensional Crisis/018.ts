import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Emolga",
		'fr-fr': "Emolga"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [587],
	hp: 70,
	types: ["Lightning"],

	description: {
		'en-us': "As Emolga flutters through the air, it crackles\nwith electricity. This Pokémon is cute, but it can\ncause a lot of trouble.",
		'fr-fr': "Il virevolte dans le ciel en libérant des gerbes d'électricité. Son vol est gracieux, mais peut s'avérer dangereux."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Static Shock",
			'fr-fr': "Choc Statique"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card