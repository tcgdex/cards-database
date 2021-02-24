import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Starmie-GX",
		fr: "Staross-GX",
	},
	illustrator: "PLANETA Otani",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 190,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Star Stream",
				fr: "Flot Stellaire",
			},
			effect: {
				en: "Attach 2 Water Energy cards from your discard pile to 1 of your Pokémon.",
				fr: "Attachez 2 cartes Énergie Water de votre pile de défausse à l’un de vos Pokémon.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque Tournante",
			},

			damage: 100,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hydro Pump-GX",
				fr: "Hydrocanon-GX",
			},
			effect: {
				en: "This attack does 40 more damage times the amount of Water Energy attached to this Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 40 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
