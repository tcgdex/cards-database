import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'es-es': "Growlithe",
		'it-it': "Growlithe",
		'pt-br': "Growlithe",
		'de-de': "Fukano"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'es-es': "Llama",
			'it-it': "Fiammata",
			'pt-br': "Chama",
			'de-de': "Flackern"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682060,
				tcgplayer: 451650
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682060,
				tcgplayer: 451650
			}
		},
	],
}

export default card
