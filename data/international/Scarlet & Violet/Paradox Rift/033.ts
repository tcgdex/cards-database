import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [223],
	set: Set,

	name: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid",
		'es-es': "Remoraid",
		'it-it': "Remoraid",
		'pt-br': "Remoraid",
		'de-de': "Remoraid"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Sprinkle Water",
			'fr-fr': "Eau Aspergeante",
			'es-es': "Esparcir Agua",
			'it-it': "Goccioline",
			'pt-br': "Aspergir Água",
			'de-de': "Wassersprüher"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Using its dorsal fin as a suction pad, it clings to a Mantine's underside to scavenge for leftovers.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740509,
				tcgplayer: 523642,
				cardtrader: 265177
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740509,
				tcgplayer: 523642,
				cardtrader: 265177
			}
		},
	],

	illustrator: "Midori Harada",

	
}

export default card
