import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [962],
	set: Set,

	name: {
		'fr-fr': "Lestombaile",
		'en-us': "Bombirdier",
		'es-es': "Bombirdier",
		'it-it': "Bombirdier",
		'pt-br': "Bombirdier",
		'de-de': "Adebom"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Poche de Livraison",
			'en-us': "Delivery Pocket",
			'es-es': "Bolsillo de Reparto",
			'it-it': "Tasca da Consegna",
			'pt-br': "Bolso de Entrega",
			'de-de': "Liefertasche"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por um Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'fr-fr': "Lame Obscurité",
			'en-us': "Dark Edge",
			'es-es': "Filo Siniestro",
			'it-it': "Lama Oscura",
			'pt-br': "Gume Sombrio",
			'de-de': "Dunkelklinge"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'en-us': "Discard an Energy from this Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715622,
				tcgplayer: 497662,
				cardtrader: 248799
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715622,
				tcgplayer: 497662,
				cardtrader: 248799
			}
		},
	],

	illustrator: "Sekio",

	description: {
		'en-us': "It gathers things up in an apron made from shed feathers added to the Pokémon's chest feathers, then drops those things from high places for fun.",
	},
}

export default card
