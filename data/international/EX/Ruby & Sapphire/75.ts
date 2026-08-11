import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Treecko",
		'fr-fr': "Arcko",
		'de-de': "Geckarbor"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [252],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poison Breath",
				'fr-fr': "Haleine empoisonnée",
				'de-de': "Gifthauch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt vergiftet."
			},

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
			type: "Water",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275723,
				tcgplayer: 90032
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275723,
				tcgplayer: 90032
			}
		},
	],

}

export default card
