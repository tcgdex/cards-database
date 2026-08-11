import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Volcanion",
		'fr-fr': "Volcanion",
		'es-es': "Volcanion",
		'it-it': "Volcanion",
		'pt-br': "Volcanion",
		'de-de': "Volcanion"
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
				'en-us': "Power Heater",
				'fr-fr': "Puissance de Chauffe",
				'es-es': "Caldera Vigorosa",
				'it-it': "Scaldapotere",
				'pt-br': "Aquecedor Potente",
				'de-de': "Power-Heizer"
			},
			effect: {
				'en-us': "Choose 2 of your Benched Pokémon. Attach a Fire Energy card from your discard pile to each of those Pokémon.",
				'fr-fr': "Choisissez 2 de vos Pokémon de Banc. Attachez une carte Énergie Fire de votre pile de défausse à chacun des Pokémon choisis.",
				'es-es': "Elige 2 de tus Pokémon en Banca. Une 1 carta de Energía Fire de tu pila de descartes a cada uno de esos Pokémon.",
				'it-it': "Scegli due dei tuoi Pokémon in panchina. Assegna a ciascuno di quei Pokémon una carta Energia Fire dalla tua pila degli scarti.",
				'pt-br': "Escolha 2 dos seus Pokémon no Banco. Ligue um card de Energia Fire da sua pilha de descarte a cada um daqueles Pokémon.",
				'de-de': "Wähle 2 Pokémon auf deiner Bank. Lege 1 Fire-Energiekarte aus deinem Ablagestapel an jedes dieser Pokémon an."
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
				'en-us': "Steam Artillery",
				'fr-fr': "Artillerie Vapeur",
				'es-es': "Artillería de Vapor",
				'it-it': "Artiglieria Vapore",
				'pt-br': "Artilharia de Vapor",
				'de-de': "Dampfgeschütz"
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

	description: {
		'en-us': "It expels its internal steam from the arms on its back. It has enough power to blow away a mountain.",
	},

	thirdParty: {
		cardmarket: 290990,
		tcgplayer: 121013
	}
}

export default card
