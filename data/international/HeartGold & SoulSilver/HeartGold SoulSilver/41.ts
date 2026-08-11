import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Dunsparce",
		'fr-fr': "Insolourdo",
		'de-de': "Dummisel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [206],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Glare",
				'fr-fr': "Intimidation",
				'de-de': "Giftblick"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fade Out",
				'fr-fr': "Faiblir",
				'de-de': "Ausblenden"
			},
			effect: {
				'en-us': "Return Dunsparce and all cards attached to it to your hand.",
				'fr-fr': "Reprenez Insolourdo et toutes les cartes qui lui sont attachées dans votre main.",
				'de-de': "Nimm Dummisel und alle an es angelegten Karten auf deine Hand zurück."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When spotted, this Pokémon escapes backward by furiously boring into the ground with its tail."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85012,
				cardmarket: 279013
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85012,
				cardmarket: 279013
			}
		},
	],

}

export default card
