import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
	},
	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		395,
	],
	hp: 160,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Total Command",
				fr: "Commande Totale",
			},
			effect: {
				en: "This attack does 20 damage for each Benched Pokémon (both yours and your opponent's).",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Whirlpool",
				fr: "Siphon",
			},
			effect: {
				en: "Discard an Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
