import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'de-de': "Blanas"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		274,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Dirty Trick",
				'fr-fr': "Coup en douce",
				'de-de': "Fieser Trick"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to 1 of your opponent's Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée à 1 des Pokémon de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' lege 1 Energiekarte, die an 1 gegnerisches Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Razor Wind",
				'fr-fr': "Coupe-vent",
				'de-de': "Klingensturm"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Wirf 1 Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The sound of its grass flute makes its listeners uneasy. It lives deep in forests.",
		'fr-fr': "Le son de sa flûte d'herbe déstabilise l'auditeur. Il vit au plus profond des forêts."
	},

	thirdParty: {
		cardmarket: 277556,
		tcgplayer: 87825
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
