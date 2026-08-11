import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Weavile",
		'fr-fr': "Dimoret",
		'es-es': "Weavile",
		'it-it': "Weavile",
		'pt-br': "Weavile",
		'de-de': "Snibunna"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		461,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Dark Penalty",
				'fr-fr': "Punition Obscure",
			},
			effect: {
				'en-us': "If the Defending Pokémon has no Pokémon Tool card attached to it, this attack does nothing.",
				'fr-fr': "S'il n'y a pas de carte Outil Pokémon attachée au Pokémon Défenseur, cette attaque ne fait rien.",
			},
			damage: 90,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-Griffe",
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Evolution made it even more devious. It communicates by clawing signs in boulders.",
	},

	thirdParty: {
		cardmarket: 280295,
		tcgplayer: 90534
	}
}

export default card
