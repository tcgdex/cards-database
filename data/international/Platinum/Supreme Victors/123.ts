import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Roselia",
		'fr-fr': "Roselia",
		'de-de': "Roselia"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [315],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Vine Slap",
				'fr-fr': "Gifle de liane",
				'de-de': "Rankenklatscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Spit Poison",
				'fr-fr': "Crache-venin",
				'de-de': "Giftspucke"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "The more healthy the Roselia, the more pleasant its flowers' aroma. Its scent deeply relaxes people."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88822,
				cardmarket: 278814
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278814,
				tcgplayer: 88822
			}
		},
	],

}

export default card
