import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Wobbuffet",
		'fr-fr': "Qulbutoké",
		'de-de': "Woingenau"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Countercharge",
				'fr-fr': "Contre-charge",
				'de-de': "Konterangriff"
			},
			effect: {
				'en-us': "Flip a coin. If heads, move all damage counters from Wobbuffet to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, déplacez tous les marqueurs de dégât de Qulbutoké sur le Pokémon Défenseur.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" entferne alle Schadensmarken von Woingenau und lege sie auf das Verteidigende Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It desperately tries to keep its black tail hidden. It is said to be proof the tail hides a secret.",
		'fr-fr': "Il cherche désespérément à cacher sa queue noire. Certains pensent qu'elle renferme un secret."
	},

	thirdParty: {
		cardmarket: 277540,
		tcgplayer: 90620
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
