import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Latias ◇",
		'fr-fr': "Latias ◇",
		'es-es': "Latias ◇",
		'it-it': "Latias ◇",
		'pt-br': "Latias ◇",
		'de-de': "Latias ◇"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		380,
	],

	hp: 130,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dreamy Mist",
				'fr-fr': "Brume Onirique",
				'es-es': "Niebla de Ensueño",
				'it-it': "Nebulasogno",
				'pt-br': "Névoa do Sonho",
				'de-de': "Traumhafter Nebel"
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to each of your Basic Benched Dragon Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à chacun des Pokémon Dragon de base sur votre Banc.",
				'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a cada uno de tus Pokémon Dragon Básicos en Banca.",
				'it-it': "Assegna a ciascuno dei tuoi Pokémon Base Dragon in panchina una carta Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia básica da sua pilha de descarte a cada um dos seus Pokémon Dragon Básicos no Banco.",
				'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an jedes Dragon-Basis-Pokémon auf deiner Bank an."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can telepathically communicate with people. It changes its appearance using its down that refracts light.",
	},

	thirdParty: {
		cardmarket: 360923
	}
}

export default card
