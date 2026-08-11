import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Miltank",
		'fr-fr': "Écrémeuh",
		'de-de': "Miltank"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [241],

	hp: 90,

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
				'en-us': "Moomoo Squeeze",
				'fr-fr': "Compression Meumeu",
				'de-de': "Kuhmuh-Quetsche"
			},
			effect: {
				'en-us': "Search your deck for a Moomoo Milk card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Lait Meumeu dans votre deck, montrez-la à votre adversaire, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Kuhmuh-Milch-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage",
				'de-de': "Bodyslam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
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

	retreat: 3,

	description: {
		'en-us': "If it is around babies, the milk it produces contains much more nutrition than usual."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87466,
				cardmarket: 279019
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87466,
				cardmarket: 279019
			}
		},
		{
			type: "normal",
			stamp: ["snowflake"],
			languages: ["de"]
		},
	],

}

export default card
