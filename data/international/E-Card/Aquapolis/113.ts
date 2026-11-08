import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool",
		'de-de': "Tentacha"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [72],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Poison Sting",
				'fr-fr': "Gaz toxik",
				'de-de': "Giftstachel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt vergiftet."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Recover",
				'fr-fr': "Soin",
				'de-de': "Erholung"
			},
			effect: {
				'en-us': "Discard 1 Water Energy card attached to Tentacool in order to use this attack. Remove all damage counters from Tentacool.",
				'fr-fr': "Défaussez-vous d'une carte Énergie  attachée à Tentacool afin d'utiliser cette attaque. Retirez tous les marqueurs de dégâts sur Tentacool.",
				'de-de': "Lege 1 an Tentacha angelegte -Energiekarte auf deinen Ablagestapel, um diesen Angriff zu verwenden. Entferne alle Schadensmarken von Tentacha."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89865,
				cardmarket: 275189
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89865,
				cardmarket: 275189
			}
		},
	]
}

export default card
