import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "It's nature's cleaner-it eats anything and everything, including garbage and rotten things. The ground near its nest is always clean.",
	},


	name: {
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
		'es-es': "Wimpod",
		'es-mx': "Wimpod",
		'de-de': "Reißlaus",
		'it-it': "Wimpod",
		'pt-br': "Wimpod"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	dexId: [767],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'es-mx': "Mordisquear",
			'de-de': "Nagen",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída"
		},

		cost: ["Water"],
		damage: 10
	}, {
		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'es-es': "Puño Tirabuzón",
			'es-mx': "Puño Sacacorchos",
			'de-de': "Korkenzieherhieb",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha"
		},

		cost: ["Colorless", "Colorless"],
		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886417,
				tcgplayer: 693562
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886417,
				tcgplayer: 693562
			}
		},
	],
}

export default card
