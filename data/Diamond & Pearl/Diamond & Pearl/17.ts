import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Torterra",
		fr: "Torterra",
		de: "Chelterrar"
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
		en: "Grotle",
		fr: "Boskara",
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
				en: "Body Slam",
				fr: "Plaquage",
				de: "Bodyslam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
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
				en: "Leaf Storm",
				fr: "Tempêteverte",
				de: "Blättersturm"
			},
			effect: {
				en: "Remove 2 damage counters from each of your Grass Pokémon.",
				fr: "Retirez 2 marqueurs de dégât à chacun de vos Pokémon Grass.",
				de: "Entferne 2 Schadensmarken von jedem deiner -Pokémon."
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
