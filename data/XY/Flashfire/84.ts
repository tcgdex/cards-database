import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Buneary",
		fr: "Laporeille",
		es: "Buneary",
		it: "Buneary",
		pt: "Buneary",
		de: "Haspiror"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		427,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bounce",
				fr: "Rebond",
				es: "Bote",
				it: "Rimbalzo",
				pt: "Ricochete",
				de: "Sprungfeder"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Scambia questo Pokémon con uno della tua panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon do Banco.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
