import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Meowstic",
		'fr-fr': "Mistigrix",
		'es-es': "Meowstic",
		'it-it': "Meowstic",
		'pt-br': "Meowstic",
		'de-de': "Psiaugon"
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
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
		'es-es': "Espurr",
		'it-it': "Espurr",
		'pt-br': "Espurr",
		'de-de': "Psiau"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Present",
				'fr-fr': "Cadeau d'Énergie",
				'es-es': "Obsequio de Energía",
				'it-it': "Regalo Energetico",
				'pt-br': "Presente de Energia",
				'de-de': "Energiegeschenk"
			},
			effect: {
				'en-us': "Attach up to 2 Energy cards from your hand to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez jusqu'à 2 cartes Énergie de votre main à l'un de vos Pokémon de Banc.",
				'es-es': "Une hasta 2 cartas de Energía de tu mano a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna fino a due carte Energia dalla tua mano a uno dei tuoi Pokémon in panchina.",
				'pt-br': "Ligue até 2 cards de Energia da sua mão a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege bis zu 2 Energiekarten von deiner Hand an 1 Pokémon auf deiner Bank an."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psyshot",
				'fr-fr': "Piqûre Psy",
				'es-es': "Disparo Psi",
				'it-it': "Psicosparo",
				'pt-br': "Tiro Psíquico",
				'de-de': "Psychoschuss"
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

	description: {
		'en-us': "The eyeball patterns on the interior of its ears emit psychic energy. It keeps the patterns tightly covered because that power is too immense.",
	},

	thirdParty: {
		cardmarket: 288234,
		tcgplayer: 111600
	}
}

export default card
