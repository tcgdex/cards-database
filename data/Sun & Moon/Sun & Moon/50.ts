import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		171,
	],
	hp: 110,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde Folie",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Spark",
				fr: "Aqua-Étincelle",
			},
			effect: {
				en: "If this Pokémon has any Water Energy attached to it, this attack does 60 more damage.",
				fr: "Si de l’Énergie Water est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
