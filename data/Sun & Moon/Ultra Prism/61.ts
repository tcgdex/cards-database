import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Cosmoem",
		fr: "Cosmovum",
		es: "Cosmoem",
		it: "Cosmoem",
		pt: "Cosmoem",
		de: "Cosmovum"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		790,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Cosmog",
		fr: "Cosmog",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Teleport",
				fr: "Téléport",
				es: "Teletransporte",
				it: "Teletrasporto",
				pt: "Teleporte",
				de: "Teleport"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Scambia questo Pokémon con uno della tua panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
