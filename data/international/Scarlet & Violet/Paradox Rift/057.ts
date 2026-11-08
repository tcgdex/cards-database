import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [1002],
	set: Set,

	name: {
		'en-us': "Chien-Pao",
		'fr-fr': "Baojian",
		'es-es': "Chien-Pao",
		'it-it': "Chien-Pao",
		'pt-br': "Chien-Pao",
		'de-de': "Baojian"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Snow Bringer",
			'fr-fr': "Porteur de Neige",
			'es-es': "Portador de Nieve",
			'it-it': "Portaneve",
			'pt-br': "Emissário das Neves",
			'de-de': "Schneebringer"
		},

		effect: {
			'en-us': "Attach up to 2 Basic {W} Energy cards from your discard pile to 1 of your Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie {W} de base de votre pile de défausse à l'un de vos Pokémon.",
			'es-es': "Une hasta 2 cartas de Energía {W} Básica de tu pila de descartes a uno de tus Pokémon.",
			'it-it': "Assegna a uno dei tuoi Pokémon fino a due carte Energia base {W} dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia {W} Básica da sua pilha de descarte a 1 dos seus Pokémon.",
			'de-de': "Lege bis zu 2 Basis-{W}-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Wrathful Blade",
			'fr-fr': "Lame du Courroux",
			'es-es': "Cuchilla Iracunda",
			'it-it': "Lama Iraconda",
			'pt-br': "Espada da Ira",
			'de-de': "Zorniges Schwert"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "The hatred of those who perished by the sword long ago has clad itself in snow and become a Pokémon.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740548,
				tcgplayer: 523668,
				cardtrader: 265105
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 812589
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740548,
				tcgplayer: 523668,
				cardtrader: 265105
			}
		},
	],

	illustrator: "Anesaki Dynamic",

	
}

export default card
