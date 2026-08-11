import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
		'de-de': "Safcon"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [11],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Green Shield",
				'fr-fr': "Bouclier vert",
				'de-de': "Grüner Schild"
			},
			effect: {
				'en-us': "Each of your Grass Pokémon has no Weakness.",
				'fr-fr': "Vos Pokémon Grass ne subissent plus la Faiblesse.",
				'de-de': "Jedes deiner -Pokémon hat keine Schwäche mehr."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sharpen",
				'fr-fr': "Affûtage",
				'de-de': "Schärfer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It prepares for evolution by hardening its shell as much as possible to protect its soft body."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87391,
				cardmarket: 279018
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87391,
				cardmarket: 279018
			}
		},
	],

}

export default card
