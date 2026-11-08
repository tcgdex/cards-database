import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Pidove",
		'fr-fr': "Poichigeon",
		'es-es': "Pidove",
		'it-it': "Pidove",
		'pt-br': "Pidove",
		'de-de': "Dusselgurr"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		519,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Glide",
				'fr-fr': "Glissement",
				'es-es': "Planeo",
				'it-it': "Aliante",
				'pt-br': "Planeio",
				'de-de': "Gleiten"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flap",
				'fr-fr': "Battement",
				'es-es': "Aleteo",
				'it-it': "Alabattito",
				'pt-br': "Asa",
				'de-de': "Flattern"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This very forgetful Pokémon will wait for a new order from its Trainer even though it already has one.",
	},

	thirdParty: {
		cardmarket: 388657,
		tcgplayer: 195174
	}
}

export default card
