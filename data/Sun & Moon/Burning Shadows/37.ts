import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Simipour",
		fr: "Flotoutan",
		es: "Simipour",
		it: "Simipour",
		pt: "Simipour",
		de: "Sodachita"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		516,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Reflect",
				fr: "Reflet Aquatique",
				es: "Reflejo Agua",
				it: "Acquaspecchio",
				pt: "Água Refletora",
				de: "Aquareflektor"
			},
			effect: {
				en: "Move a Water Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie Water de ce Pokémon vers l’un de vos Pokémon de Banc.",
				es: "Mueve 1 Energía Water de este Pokémon a 1 de tus Pokémon en Banca.",
				it: "Sposta un’Energia Water da questo Pokémon a uno di quelli nella tua panchina.",
				pt: "Mova 1 Energia Water deste Pokémon para 1 dos seus Pokémon no Banco.",
				de: "Verschiebe 1 Water-Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
