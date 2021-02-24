import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Glalie",
		fr: "Oniglali",
	},
	illustrator: "Uta",
	rarity: "Rare",
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
			],
			name: {
				en: "Ice Fang",
				fr: "Crocs Givre",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed, and discard an Energy from that Pokémon.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé, et vous défaussez une Énergie de ce Pokémon-là.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frosty Typhoon",
				fr: "Typhon Givré",
			},
			effect: {
				en: "This Pokémon can't use Frosty Typhoon during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Typhon Givré pendant votre prochain tour.",
			},
			damage: 120,

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
