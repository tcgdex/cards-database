import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Shellder",
		'fr-fr': "Kokiyas",
		'de-de': "Muschas"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		90,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'de-de': "Superschall"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Hide in Shell",
				'fr-fr': "Cache-coquille",
				'de-de': "In Muschel verstecken"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Shellder during your opponent's next turn. (Any other effects of attacks still happen.)",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Kokiyas pendant le prochain tour de votre adversaire. (Tout autre effet ou attaque est toujours valide.)",
				'de-de': "Wirf eine Münze. Bei 'Kopf' verhindere allen Schaden, der Muschas während des nächsten Zuges deines gegners zugefügt wird. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.",
		'fr-fr': "Protégé par une carapace très résistante, il est vulnérable quand celle-ci s'ouvre."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273915,
				tcgplayer: 44456
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273915,
				tcgplayer: 44456
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
