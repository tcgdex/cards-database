import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Drifblim",
		fr: "Grodrive",
	},
	illustrator: "Akira Komayama",
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
				en: "Drifting Balloon",
				fr: "Ballon Flottant",
			},
			effect: {
				en: "This Pokémon's attacks cost Colorless less for each of your opponent's Team Plasma Pokémon in play.",
				fr: "Les attaques de ce Pokémon coûtent Colorless de moins pour chaque Pokémon de la Team Plasma de votre adversaire en jeu.",
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
				en: "Derail",
				fr: "Déraillement",
			},
			effect: {
				en: "Discard a Special Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
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





}

export default card
