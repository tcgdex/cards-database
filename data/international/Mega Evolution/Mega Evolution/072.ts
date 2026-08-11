import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita",
		'de-de': "Makuhita",
		'it-it': "Makuhita",
		'es-es': "Makuhita",
		'pt-br': "Makuhita",
		'es-mx': "Makuhita"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [296],

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'de-de': "Korkenzieherhieb",
			'it-it': "Pugno Rotante",
			'es-es': "Puño Tirabuzón",
			'pt-br': "Soco Saca-rolha",
			'es-mx': "Puño Sacacorchos"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Confront",
			'fr-fr': "Confrontation",
			'de-de': "Konfrontieren",
			'it-it': "Confronto",
			'es-es': "Confrontar",
			'pt-br': "Confrontar",
			'es-mx': "Confrontar"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851143,
				tcgplayer: 654411
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851143,
				tcgplayer: 654411
			}
		},
	],
}

export default card
