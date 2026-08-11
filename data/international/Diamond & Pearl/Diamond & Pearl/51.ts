import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
		'de-de': "Hippopotas"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		449,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Yawn",
				'fr-fr': "Baillement",
				'de-de': "Gähnen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Sand Attack",
				'fr-fr': "Jet de sable",
				'de-de': "Sandwirbel"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, votre adversaire lance une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It lives in arid places. Instead of perspiration, it expels grainy sand from its body.",
		'fr-fr': "Il vit dans des endroits arides. Il exsude du sable granuleux au lieu de transpirer."
	},

	thirdParty: {
		cardmarket: 277550,
		tcgplayer: 86078
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
