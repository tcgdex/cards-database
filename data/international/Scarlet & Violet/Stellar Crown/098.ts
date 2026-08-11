import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [385],
	set: Set,

	name: {
		'en-us': "Jirachi",
		'fr-fr': "Jirachi",
		'es-es': "Jirachi",
		'it-it': "Jirachi",
		'pt-br': "Jirachi",
		'de-de': "Jirachi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Swelling Wish",
			'fr-fr': "Souhait Grandissant",
			'es-es': "Deseo Rebosante",
			'it-it': "Desiderio Amplificato",
			'pt-br': "Desejo Crescente",
			'de-de': "Wachsender Wunsch"
		},

		effect: {
			'en-us': "Attach a Basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
			'pt-br': "Ligue uma carta de Energia Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle",
			'es-es': "Bofetón",
			'it-it': "Sberla",
			'pt-br': "Tapa",
			'de-de': "Hieb"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785952,
				tcgplayer: 567324
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785952,
				tcgplayer: 567324
			}
		},
	],

	illustrator: "Kuroimori",

}

export default card
