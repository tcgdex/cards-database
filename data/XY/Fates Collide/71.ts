import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
		es: "Whimsicott",
		it: "Whimsicott",
		pt: "Whimsicott",
		de: "Elfun"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
		es: "Cottonee",
		it: "Cottonee",
		pt: "Cottonee",
		de: "Waumboll"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Light Steps",
				fr: "Pas Légers",
				es: "Pasos Ligeros",
				it: "Passetto",
				pt: "Passos Quietos",
				de: "Auf leisen Sohlen"
			},
			effect: {
				en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
				es: "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
				it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
				pt: "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
				de: "Verschiebe 1 an dieses Pokémon angelegte Energie auf 1 Pokémon auf deiner Bank."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 0
}

export default card
