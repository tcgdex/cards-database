import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Sigilyph",
		'fr-fr': "Cryptéro",
		'es-es': "Sigilyph",
		'it-it': "Sigilyph",
		'pt-br': "Sigilyph",
		'de-de': "Symvolara"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		561,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Quick Turn",
				'fr-fr': "Vif Retournement",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Assault",
				'fr-fr': "Assaut Psychique",
			},
			effect: {
				'en-us': "Does 10 more damage for each damage counter on the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Défenseur.",
			},
			damage: 40,

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
		'en-us': "They never vary the route they fly, because their memories of guarding an ancient city remain steadfast.",
	},

	thirdParty: {
		cardmarket: 280006,
		tcgplayer: 89205
	}
}

export default card
