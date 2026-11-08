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
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Flop",
			'fr-fr': "Flop",
			'es-es': "Vuelta",
			'it-it': "Tonfo",
			'pt-br': "Baque",
			'de-de': "Plumps"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It has its third set of legs folded up. When it's in a tough spot, this Pokémon jumps over 30 feet using the strength of its legs.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740490,
				tcgplayer: 523614,
				cardtrader: 265101
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740490,
				tcgplayer: 523614,
				cardtrader: 265101
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
