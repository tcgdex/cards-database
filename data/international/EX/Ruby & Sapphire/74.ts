import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu",
		'de-de': "Flemmli"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [255],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Singe",
				'fr-fr': "Roussir",
				'de-de': "Versengung"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt verbrannt."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [		{
			type: "normal",
			thirdParty: {
				cardmarket: 275722,
				tcgplayer: 89950
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275722,
				tcgplayer: 89950
			}
		},
		{
			type: "normal",
			size: "jumbo",
			stamp: ["25th-celebration"],
			thirdParty: {
				tcgplayer: 231471
			}
		},
		{
			type: "normal",
			stamp: ["chris-fulop"],
			thirdParty: {
				tcgplayer: 477355
			}
		}
	],

}

export default card
