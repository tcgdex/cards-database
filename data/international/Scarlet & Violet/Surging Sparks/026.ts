import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [741],
	set: Set,

	name: {
		'en-us': "Oricorio",
		'fr-fr': "Plumeline",
		'es-es': "Oricorio",
		'it-it': "Oricorio",
		'pt-br': "Oricorio",
		'de-de': "Choreogel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Energy Assist",
			'fr-fr': "Assistance Énergétique",
			'es-es': "Asistencia de Energía",
			'it-it': "Assistienergia",
			'pt-br': "Socorro de Energia",
			'de-de': "Energieförderung"
		},

		effect: {
			'en-us': "Attach up to 2 Basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'es-es': "Une hasta 2 cartas de Energía Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina fino a due carte Energia base dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'de-de': "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Fire"],

		name: {
			'en-us': "Fireworks",
			'fr-fr': "Feu d'Artifice",
			'es-es': "Fuegos Artificiales",
			'it-it': "Fuochi d'Artificio",
			'pt-br': "Fogos de Artifício",
			'de-de': "Feuerwerk"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794281,
				tcgplayer: 590012
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794281,
				tcgplayer: 590012
			}
		},
	],

	illustrator: "Heisuke Kitazawa",
	
}

export default card
