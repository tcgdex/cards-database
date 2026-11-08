import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'fr-fr': "Pikachu",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pika Punch",
				'fr-fr': "Pika-poing",
				'de-de': "Pikahieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Speed Bolt",
				'fr-fr': "Boulon vitesse",
				'de-de': "Tempoblitz"
			},
			effect: {
				'en-us': "If Pikachu evolved from Pichu during this turn, prevent all effects of an attack, including damage, done to Pikachu during your opponent's next turn.",
				'fr-fr': "Si Pikachu a évolué de Pichu lors de ce tour, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Pikachu lors du prochain tour de votre adversaire.",
				'de-de': "Wenn Pikachu sich in diesem Zug aus Pichu entwickelt hat, verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Pikachu zugefügt würden."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It lives in forests with others. It stores electricity in the pouches on its cheeks.",
		'fr-fr': "Il vit en forêt avec ses pairs. Il accumule l'électricité dans les poches de ses joues."
	},

	thirdParty: {
		cardmarket: 278368,
		tcgplayer: 88090
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
