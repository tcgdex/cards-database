import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Grotle",
		'fr-fr': "Boskara",
		'de-de': "Chelcarain"
	},

	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		388,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Planting",
				'fr-fr': "Plantations",
				'de-de': "Anpflanzen"
			},
			effect: {
				'en-us': "Attach a Grass Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Attachez une carte Énergie Grass de votre main à 1 de vos Pokémon.",
				'de-de': "Lege 1 -Energiekarte von deiner Hand an 1 deiner Pokémon an."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage",
				'de-de': "Bodyslam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The shell is hardened soil. Some Pokémon come to peck the berries growing on the trees on its back.",
	},

	thirdParty: {
		cardmarket: 278086,
		tcgplayer: 85917
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
