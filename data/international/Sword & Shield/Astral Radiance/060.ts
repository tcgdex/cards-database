import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [280],
	set: Set,

	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'it-it': "Ralts",
		'pt-br': "Ralts",
		'de-de': "Trasla"
	},

	illustrator: "Hataya",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Teleportation Burst",
			'fr-fr': "Téléportation Explosive",
			'es-es': "Explosión Teleportadora",
			'it-it': "Scoppio Teletrasporto",
			'pt-br': "Teletransporte Explosivo",
			'de-de': "Blitz-Teleportation"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 10
	}],

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
	regulationMark: "F",


	description: {
		'en-us': "Tends to prefer people with a chipper disposition to those who are gloomy, but it has shown no discrimination with regard to age or gender. Needs more research.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658630,
				tcgplayer: 272261
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658630,
				tcgplayer: 272261
			}
		},
	],
}

export default card
