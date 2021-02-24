import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Kingdra-GX",
		fr: "Hyporoi-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 230,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
			},
			effect: {
				en: "This attack does 50 more damage times the amount of Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Reverse Thrust",
				fr: "Poussée Inverse",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Maelstrom-GX",
				fr: "Maelström-GX",
			},
			effect: {
				en: "This attack does 40 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 40 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
