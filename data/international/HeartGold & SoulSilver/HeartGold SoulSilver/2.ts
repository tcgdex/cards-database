import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Azumarill",
		'fr-fr': "Azumarill",
		'de-de': "Azumarill"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [184],

	hp: 90,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Marill",
		'fr-fr': "Marill"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Waterfall",
				'fr-fr': "Cascade",
				'de-de': "Kaskade"
			},

			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bubblebeam",
				'fr-fr': "Bulles d’o",
				'de-de': "Blubbstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When it plays in water, it rolls up its elongated ears to prevent their insides from getting wet."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83685,
				cardmarket: 278974
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83685,
				cardmarket: 278974
			}
		},
	],

}

export default card
