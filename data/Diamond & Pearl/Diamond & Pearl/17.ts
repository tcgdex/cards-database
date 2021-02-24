import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Torterra",
		fr: "Torterra",
	},
	illustrator: "Masahiko Ishii",
	rarity: "Rare",
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
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
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
			},
			effect: {
				en: "Remove 2 damage counters from each of your Grass Pokémon.",
				fr: "Retirez 2 marqueurs de dégât à chacun de vos Pokémon Grass.",
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



}

export default card
