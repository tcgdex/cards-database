import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "White Kyurem-EX",
		fr: "Kyurem Blanc ex",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 180,
	types: [
		"Dragon",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Stream",
				fr: "Flux Draconique",
			},
			effect: {
				en: "Flip a coin. If heads, attach a basic Energy card from your discard pile to this Pokémon.",
				fr: "Lancez une pièce. Si c'est face, attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Burn",
				fr: "Feu Glacé",
			},
			effect: {
				en: "Discard 2 Fire Energy attached to this Pokémon. The Defending Pokémon is now Burned.",
				fr: "Défaussez 2 Énergies Fire attachées à ce Pokémon. Le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
