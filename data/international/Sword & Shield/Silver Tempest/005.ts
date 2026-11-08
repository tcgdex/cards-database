import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [191],
	set: Set,

	name: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin",
		'es-es': "Sunkern",
		'it-it': "Sunkern",
		'pt-br': "Sunkern",
		'de-de': "Sonnkern"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine",
			'es-es': "Bomba Germen",
			'it-it': "Semebomba",
			'pt-br': "Bomba de Sementes",
			'de-de': "Samenbomben"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It lives by drinking only dewdrops from under the leaves of plants. It is said that it eats nothing else.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682044,
				tcgplayer: 451625
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682044,
				tcgplayer: 451625
			}
		},
	],
}

export default card
