import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Volcanion",
		fr: "Volcanion",
		es: "Volcanion",
		it: "Volcanion",
		pt: "Volcanion",
		de: "Volcanion"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		721,
	],
	hp: 130,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Power Heater",
				fr: "Puissance de Chauffe",
				es: "Caldera Vigorosa",
				it: "Scaldapotere",
				pt: "Aquecedor Potente",
				de: "Power-Heizer"
			},
			effect: {
				en: "Choose 2 of your Benched Pokémon. Attach a Fire Energy card from your discard pile to each of those Pokémon.",
				fr: "Choisissez 2 de vos Pokémon de Banc. Attachez une carte Énergie Fire de votre pile de défausse à chacun des Pokémon choisis.",
				es: "Elige 2 de tus Pokémon en Banca. Une 1 carta de Energía Fire de tu pila de descartes a cada uno de esos Pokémon.",
				it: "Scegli due dei tuoi Pokémon in panchina. Assegna a ciascuno di quei Pokémon una carta Energia Fire dalla tua pila degli scarti.",
				pt: "Escolha 2 dos seus Pokémon no Banco. Ligue um card de Energia Fire da sua pilha de descarte a cada um daqueles Pokémon.",
				de: "Wähle 2 Pokémon auf deiner Bank. Lege 1 Fire-Energiekarte aus deinem Ablagestapel an jedes dieser Pokémon an."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Steam Artillery",
				fr: "Artillerie Vapeur",
				es: "Artillería de Vapor",
				it: "Artiglieria Vapore",
				pt: "Artilharia de Vapor",
				de: "Dampfgeschütz"
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
