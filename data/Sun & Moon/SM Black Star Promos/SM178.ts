import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Melmetal-GX",
		fr: "Melmetal-GX",
	},
	illustrator: "PLANETA Otani",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		809,
	],
	hp: 220,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Meltan",
		fr: "Meltan",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hard Coat",
				fr: "Strate Dure",
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Blast",
				fr: "Explosion Métallique",
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Metal Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Metal attachées à ce Pokémon.",
			},
			damage: 110,

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Iron Force GX",
				fr: "Force de Fer-GX",
			},
			effect: {
				en: "Attach any number of Metal Energy cards from your discard pile to this Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Attachez autant de cartes Énergie Metal que vous le voulez de votre pile de défausse à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
