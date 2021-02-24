import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Glalie",
		fr: "Oniglali",
	},
	illustrator: "so-taro",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		362,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Raging Floe",
				fr: "Banquise Furieuse",
			},
			effect: {
				en: "If this Pokémon has any damage counters on it, this attack does 80 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
