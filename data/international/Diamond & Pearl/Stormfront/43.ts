import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Magneton",
		'fr-fr': "Magneton",
		'de-de': "Magneton"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magneti",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Wave",
				'fr-fr': "Cage-éclair",
				'de-de': "Donnerwelle"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
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
				'en-us': "Removal Pulse",
				'fr-fr': "Vibration suppressive",
				'de-de': "Entladungsimpuls"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 50,

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is actually three Magnemite linked by magnetism. A group can set off a magnetic storm.",
		'fr-fr': "Il est formé de trois MAGNETI liés par magnétisme. En groupe, ils déclenchent un orage magnétique"
	},

	thirdParty: {
		cardmarket: 278340,
		tcgplayer: 87109
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
