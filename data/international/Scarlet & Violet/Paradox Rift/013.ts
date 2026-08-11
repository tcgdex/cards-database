import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [919],
	set: Set,

	name: {
		'en-us': "Nymble",
		'fr-fr': "Lilliterelle",
		'es-es': "Nymble",
		'it-it': "Nymble",
		'pt-br': "Nymble",
		'de-de': "Micrick"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "It has its third set of legs folded up. When it's in a tough spot, this Pokémon jumps over 30 feet using the strength of its legs.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740489,
				tcgplayer: 523612,
				cardtrader: 265100
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740489,
				tcgplayer: 523612,
				cardtrader: 265100
			}
		},
	],

	illustrator: "Pani Kobayashi",

	
}

export default card
