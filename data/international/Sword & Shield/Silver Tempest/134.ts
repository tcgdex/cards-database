import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [718],
	set: Set,

	name: {
		'en-us': "Zygarde",
		'fr-fr': "Zygarde",
		'es-es': "Zygarde",
		'it-it': "Zygarde",
		'pt-br': "Zygarde",
		'de-de': "Zygarde"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Shout of Power",
			'fr-fr': "Cri de Puissance",
			'es-es': "Grito de Poder",
			'it-it': "Urlotonante",
			'pt-br': "Grito de Poder",
			'de-de': "Mächtiger Aufruf"
		},

		effect: {
			'en-us': "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
			'pt-br': "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		},

		damage: 20
	}, {
		cost: ["Grass", "Fighting"],

		name: {
			'en-us': "Speed Attack",
			'fr-fr': "Attaque Rapide",
			'es-es': "Ataque Fugaz",
			'it-it': "Attacco Veloce",
			'pt-br': "Ataque em Velocidade",
			'de-de': "Tempoangriff"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Born when around 10% of Zygarde's cells have been gathered from all over, this form is skilled in close-range combat.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682181,
				tcgplayer: 451787
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682181,
				tcgplayer: 451787
			}
		},
	],
}

export default card
