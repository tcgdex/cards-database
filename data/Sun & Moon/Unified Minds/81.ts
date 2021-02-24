import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Drifblim",
		fr: "Grodrive",
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		426,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tag Transport",
				fr: "Porte-Escouade",
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch your Active TAG TEAM Pokémon with 1 of your Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon ESCOUADE Actif avec l’un de vos Pokémon de Banc.",
			},
		},
	],
	attacks: [
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

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
