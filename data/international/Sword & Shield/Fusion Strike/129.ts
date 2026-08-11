import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [886],
	set: Set,

	name: {
		'en-us': "Drakloak",
		'fr-fr': "Dispareptil",
		'es-es': "Drakloak",
		'it-it': "Drakloak",
		'pt-br': "Drakloak",
		'de-de': "Phandra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Dreepy",
		'fr-fr': "Fantyrm",
		'es-es': "Dreepy",
		'it-it': "Dreepy",
		'pt-br': "Dreepy",
		'de-de': "Grolldra"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Darkness",
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
	regulationMark: "E",
	illustrator: "HYOGONOSUKE",

	description: {
		'en-us': "Without a Dreepy to place on its head and care for, it gets so uneasy it'll try to substitute any Pokémon it finds for the missing Dreepy."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'de-de': "Spukschuss",
			'es-es': "Disparo Embrujado",
			'pt-br': "Tiro Assustador",
			'it-it': "Colpomistero"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "U-turn",
			'fr-fr': "Demi-Tour",
			'de-de': "Kehrtwende",
			'es-es': "Ida y Vuelta",
			'pt-br': "Fazer Retorno",
			'it-it': "Retromarcia"
		},

		damage: 30,

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582668,
				tcgplayer: 253325
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582668,
				tcgplayer: 253325
			}
		},
	],
}

export default card
