import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

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

	illustrator: "Takeshi Nakamura",
	rarity: "Promo",
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

	retreat: 2,
	regulationMark: "I",

	weaknesses: [{
		type: "Psychic",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 879250,
				tcgplayer: 686275
			}
		},
	],
}

export default card
