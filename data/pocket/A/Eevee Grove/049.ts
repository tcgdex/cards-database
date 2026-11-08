import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Meltan",
		'fr-fr': "Meltan"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [808],
	hp: 60,
	types: ["Metal"],

	description: {
		'en-us': "It dissolves and eats metal. Circulating liquid\nmetal within its body is how it generates energy.",
		'fr-fr': "Il se nourrit du métal qu'il fait fondre, et produit de l'énergie en faisant circuler du métal liquide dans son corps."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card