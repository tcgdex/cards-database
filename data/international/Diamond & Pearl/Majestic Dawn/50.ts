import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'de-de': "Griffel"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		190,
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
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Ziehe eine Karte."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hand Trick",
				'fr-fr': "Coup de la main",
				'de-de': "Handkniff"
			},
			effect: {
				'en-us': "Return Aipom and all cards attached to it to your hand. (If you don't have any Benched Pokémon, this attack does nothing.)",
				'fr-fr': "Reprenez Capumain dans votre main ainsi que toutes les cartes qui lui sont attachées. (Si vous ne possédez pas de Pokémon de Banc, cette attaque est sans effet.)",
				'de-de': "Nimm Griffel und alle an es angelegten Karten zurück auf die Hand. (Dieser Angriff hat keine Auswirkungen, wenn du keine Pokémon auf der Bank hast.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives atop giant trees. It wraps its tail around a branch so it won't fall off while asleep.",
	},

	thirdParty: {
		cardmarket: 278099,
		tcgplayer: 83490
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
