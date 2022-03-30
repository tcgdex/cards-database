import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Talonflame",
		fr: "Flambusard",
		es: "Talonflame",
		it: "Talonflame",
		pt: "Talonflame",
		de: "Fiaro"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		663,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		it: "Fletchinder",
		pt: "Fletchinder",
		de: "Dartignis"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grand Loop",
				fr: "Grande Boucle",
				es: "Gran Bucle",
				it: "Granvirata",
				pt: "Grande Volta",
				de: "Großartiger Looping"
			},
			effect: {
				en: "Draw 3 cards. You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Piochez 3 cartes. Vous pouvez échanger ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Roba 3 cartas. Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Pesca tre carte. Puoi scambiare questo Pokémon con uno della tua panchina.",
				pt: "Compre 3 cards. Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Ziehe 3 Karten. Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Brave Bird",
				fr: "Rapace",
				es: "Pájaro Osado",
				it: "Baldeali",
				pt: "Pássaro Bravo",
				de: "Sturzflug"
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s'inflige 20 dégâts.",
				es: "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 20 danni a se stesso.",
				pt: "Este Pokémon causa 20 de danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
