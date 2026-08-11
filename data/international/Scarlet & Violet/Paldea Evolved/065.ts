import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [81],
	set: Set,

	name: {
		'fr-fr': "Magnéti",
		'en-us': "Magnemite",
		'es-es': "Magnemite",
		'it-it': "Magnemite",
		'pt-br': "Magnemite",
		'de-de': "Magnetilo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Charge Aimantée",
			'en-us': "Magnetic Charge",
			'es-es': "Carga Magnética",
			'it-it': "Magneticarica",
			'pt-br': "Carga Magnética",
			'de-de': "Magnetische Aufladung"
		},

		effect: {
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie {L} de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'en-us': "Attach up to 2 Basic {L} Energy cards from your discard pile to 1 of your Benched Pokémon.",
			'es-es': "Une hasta 2 cartas de Energía {L} Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina fino a due carte Energia base {L} dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia {L} Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'de-de': "Lege bis zu 2 Basis-{L}-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'fr-fr': "Balle Rapide",
			'en-us': "Speed Ball",
			'es-es': "Bola Rápida",
			'it-it': "Velocipalla",
			'pt-br': "Bola Veloz",
			'de-de': "Geschwindigkeitsball"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715540,
				tcgplayer: 497476,
				cardtrader: 248660
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715540,
				tcgplayer: 497476,
				cardtrader: 248660
			}
		},
	],

	illustrator: "ryoma uratsuka",

	description: {
		'en-us': "The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.",
	},
}

export default card
