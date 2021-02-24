import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Meowstic",
		fr: "Mistigrix",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		678,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Present",
				fr: "Cadeau d'Énergie",
			},
			effect: {
				en: "Attach up to 2 Energy cards from your hand to 1 of your Benched Pokémon.",
				fr: "Attachez jusqu'à 2 cartes Énergie de votre main à l'un de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
