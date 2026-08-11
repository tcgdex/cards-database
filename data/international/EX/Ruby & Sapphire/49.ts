import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Aron",
		'fr-fr': "Galekid",
		'de-de': "Stollunior"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [304],

	hp: 40,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Teary Eyes",
				'fr-fr': "Des larmes dans les yeux",
				'de-de': "Tränende Augen"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Aron by attacks is reduced by 10.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, les dégâts infligés à Galekid sont réduits de 10.",
				'de-de': "Während des nächsten Zuges deines Gegners wird jeder Schaden, der Stollunior durch Angriffe zugefügt wird, um 10 Schadenspunkte reduziert."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Charge",
				'de-de': "Ramme"
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

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275697,
				tcgplayer: 83629
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275697,
				tcgplayer: 83629
			}
		},
	],

}

export default card
