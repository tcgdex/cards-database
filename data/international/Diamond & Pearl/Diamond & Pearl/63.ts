import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Silcoon",
		'fr-fr': "Armulys",
		'de-de': "Schaloko"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		266,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Harden",
				'fr-fr': "Armure",
				'de-de': "Härtner"
			},
			effect: {
				'en-us': "During your opponent's next turn, if Silcoon would be damaged by an attack, prevent that attack's damage done to Silcoon if that damage is 30 or less.",
				'fr-fr': "Lors du prochain tour de votre adversaire, si une attaque inflige des dégâts à Armulys, prévenez ces dégâts s'ils sont de 30 ou moins.",
				'de-de': "Wenn Schaloko während des nächsten Zuges deines Gegners durch einen Angriff 30 oder weniger Schadenspunkte zugefügt würden, verhindere diesen Schaden."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Entangling String",
				'fr-fr': "Fil emmêlant",
				'de-de': "Einschnürender Faden"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" kann das Verteidigende Pokémon im nächsten Zug deines Gegners nicht angreifen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It anchors itself by wrapping twigs with the silk from its body. It motionlessly awaits evolution.",
		'fr-fr': "Il s'accroche en enroulant sa soie autour des branches. Il reste immobile en attendant d'évoluer."
	},

	thirdParty: {
		cardmarket: 277562,
		tcgplayer: 89212
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
