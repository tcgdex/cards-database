import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [351],
	set: Set,

	name: {
		'en-us': "Castform",
		'fr-fr': "Morphéo",
		'es-es': "Castform",
		'it-it': "Castform",
		'pt-br': "Castform",
		'de-de': "Formeo"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Double Draw",
			'fr-fr': "Double Pioche",
			'es-es': "Roba Doble",
			'it-it': "Pescata Doppia",
			'pt-br': "Compra Dupla",
			'de-de': "Zweifachzug"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Hurricane",
			'fr-fr': "Vent Violent",
			'es-es': "Vendaval",
			'it-it': "Tifone",
			'pt-br': "Furacão",
			'de-de': "Orkan"
		},

		effect: {
			'en-us': "Move a basic Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie de base de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'es-es': "Mueve 1 Energía Básica de este Pokémon a 1 de tus Pokémon en Banca.",
			'it-it': "Sposta un'Energia base da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova 1 Energia básica deste Pokémon para 1 dos seus Pokémon no Banco.",
			'de-de': "Verschiebe 1 Basis-Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Its form changes depending on the weather. The rougher conditions get, the rougher Castform's disposition!",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608662,
				tcgplayer: 263839
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608662,
				tcgplayer: 263839
			}
		},
	],
}

export default card
