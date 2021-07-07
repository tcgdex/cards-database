import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Grumpig",
		fr: "Groret",
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		326,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Tricky Steps",
				fr: "Pas Délicats",
			},
			effect: {
				en: "You may move an Energy attached to your opponent’s Active Pokémon to 1 of your opponent’s Benched Pokémon.",
				fr: "Vous pouvez déplacer une Énergie attachée au Pokémon Actif de votre adversaire vers l'un des Pokémon de Banc de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale Psy",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
