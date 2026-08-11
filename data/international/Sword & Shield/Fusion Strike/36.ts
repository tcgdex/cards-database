import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
		'es-es': "Victini",
		'it-it': "Victini",
		'pt-br': "Victini",
		'de-de': "Victini"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Mitsuhiro Arita",

	description: {
		'en-us': "When it shares the infinite energy it creates, that being's entire body will be overflowing with power."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Fiery Cheering",
			'fr-fr': "Soutien Fougueux",
			'de-de': "Feuriges Anfeuern",
			'es-es': "Ovación Ardiente",
			'pt-br': "Torcida Flamejante",
			'it-it': "Incitamento Ardente"
		},

		effect: {
			'en-us': "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an.",
			'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
			'pt-br': "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti."
		}
	}, {
		cost: ["Fire"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'de-de': "Flackern",
			'es-es': "Llama",
			'pt-br': "Chama",
			'it-it': "Fiammata"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582170,
				tcgplayer: 253136
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582170,
				tcgplayer: 253136
			}
		},
	],
}

export default card
