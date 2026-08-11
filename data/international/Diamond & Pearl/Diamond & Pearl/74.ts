import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Chatot",
		'fr-fr': "Pijako",
		'de-de': "Plaudagei"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		441,
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
				'en-us': "Me First",
				'fr-fr': "Moi d'Abord",
				'de-de': "Egotrip"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tone-Deaf",
				'fr-fr': "Dur d'oreille",
				'de-de': "Unmusikalisch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can learn and speak human words. If they gather, they all learn the same saying.",
		'fr-fr': "On peut lui enseigner quelques mots. S'il s'agit d'un groupe, ils retiendront les mêmes phrases."
	},

	thirdParty: {
		cardmarket: 277573,
		tcgplayer: 84239
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
