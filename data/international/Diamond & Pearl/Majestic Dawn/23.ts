import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Jolteon",
		'fr-fr': "Voltali",
		'de-de': "Blitza"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thunder Fang",
				'fr-fr': "Crocs Éclair",
				'de-de': "Donnerzahn"
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
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Strike",
				'fr-fr': "Frap'éclair",
				'de-de': "Blitzschlag"
			},
			effect: {
				'en-us': "You may discard 2 Energy attached to Jolteon. If you do, this attack's base damage is 90 instead of 50.",
				'fr-fr': "Vous pouvez défausser 2 Énergies attachées à Voltali. Les dégâts de base de cette attaque sont alors de 90 au lieu de 50.",
				'de-de': "Du kannst 2 Energien, die an Blitza angelegt sind, auf deinen Ablagestapel legen. Wenn du das machst, beträgt der Grundschaden dieses Angriffs 90 Schadenspunkte."
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

	description: {
		'en-us': "It controls 10,000-volt power and can raise all the furs on its body as if it were sharp needles.",
	},

	thirdParty: {
		cardmarket: 278072,
		tcgplayer: 86343
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
