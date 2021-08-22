import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Meowstic",
		fr: "Mistigrix",
		es: "Meowstic",
		it: "Meowstic",
		pt: "Meowstic",
		de: "Psiaugon"
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
				fr: "Cadeau d’Énergie",
				es: "Obsequio de Energía",
				it: "Regalo Energetico",
				pt: "Presente de Energia",
				de: "Energiegeschenk"
			},
			effect: {
				en: "Attach up to 2 Energy cards from your hand to 1 of your Benched Pokémon.",
				fr: "Attachez jusqu’à 2 cartes Énergie de votre main à l’un de vos Pokémon de Banc.",
				es: "Une hasta 2 cartas de Energía de tu mano a 1 de tus Pokémon en Banca.",
				it: "Assegna fino a due carte Energia dalla tua mano a uno dei tuoi Pokémon in panchina.",
				pt: "Ligue até 2 cards de Energia da sua mão a 1 dos seus Pokémon no Banco.",
				de: "Lege bis zu 2 Energiekarten von deiner Hand an 1 Pokémon auf deiner Bank an."
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
				es: "Disparo Psi",
				it: "Psicosparo",
				pt: "Tiro Psíquico",
				de: "Psychoschuss"
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
