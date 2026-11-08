import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [752],
	set: Set,

	name: {
		'en-us': "Araquanid",
		'fr-fr': "Tarenbulle",
		'es-es': "Araquanid",
		'it-it': "Araquanid",
		'pt-br': "Araquanid",
		'de-de': "Aranestro"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Dewpider",
		'fr-fr': "Araqua",
		'es-es': "Dewpider",
		'it-it': "Dewpider",
		'pt-br': "Dewpider",
		'de-de': "Araqua"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "KIYOTAKA OSHIYAMA",

	description: {
		'en-us': "It acts as a caretaker for Dewpider, putting them inside its bubble and letting them eat any leftover food."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'de-de': "Käferbiss",
			'es-es': "Picadura",
			'pt-br': "Picada",
			'it-it': "Coleomorso"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Bubble Launch",
			'fr-fr': "Bulles Lancées",
			'de-de': "Blasenwurf",
			'es-es': "Lanzamiento Burbuja",
			'pt-br': "Lança-bolhas",
			'it-it': "Lanciabolle"
		},

		damage: 110,

		effect: {
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			'pt-br': "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582072,
				tcgplayer: 253105
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582072,
				tcgplayer: 253105
			}
		},
	],
}

export default card
