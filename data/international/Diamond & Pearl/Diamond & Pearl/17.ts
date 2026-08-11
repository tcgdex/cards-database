import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Torterra",
		'fr-fr': "Torterra",
		'de-de': "Chelterrar"
	},

	illustrator: "Masahiko Ishii",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		389,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Grotle",
		'fr-fr': "Boskara",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
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
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Storm",
				'fr-fr': "Tempêteverte",
				'de-de': "Blättersturm"
			},
			effect: {
				'en-us': "Remove 2 damage counters from each of your Grass Pokémon.",
				'fr-fr': "Retirez 2 marqueurs de dégât à chacun de vos Pokémon Grass.",
				'de-de': "Entferne 2 Schadensmarken von jedem deiner -Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Small Pokémon occasionally gather on its unmoving back to begin building their nests.",
	},

	thirdParty: {
		cardmarket: 277516,
		tcgplayer: 89983
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse"
		}
	]
}

export default card
