import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Latias ◇",
		fr: "Latias ◇",
		es: "Latias ◇",
		it: "Latias ◇",
		pt: "Latias ◇",
		de: "Latias ◇"
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
				en: "Dreamy Mist",
				fr: "Brume Onirique",
				es: "Niebla de Ensueño",
				it: "Nebulasogno",
				pt: "Névoa do Sonho",
				de: "Traumhafter Nebel"
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to each of your Basic Benched Dragon Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à chacun des Pokémon Dragon de base sur votre Banc.",
				es: "Une 1 carta de Energía Básica de tu pila de descartes a cada uno de tus Pokémon Dragon Básicos en Banca.",
				it: "Assegna a ciascuno dei tuoi Pokémon Base Dragon in panchina una carta Energia base dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia básica da sua pilha de descarte a cada um dos seus Pokémon Dragon Básicos no Banco.",
				de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an jedes Dragon-Basis-Pokémon auf deiner Bank an."
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



}

export default card
