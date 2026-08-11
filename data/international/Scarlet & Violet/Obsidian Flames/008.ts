import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [415],
	set: Set,

	name: {
		'fr-fr': "Apitrini",
		'en-us': "Combee",
		'es-es': "Combee",
		'it-it': "Combee",
		'pt-br': "Combee",
		'de-de': "Wadribie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Répartition",
			'en-us': "Share",
			'es-es': "Compartir",
			'it-it': "Condiviso",
			'pt-br': "Compartilhar",
			'de-de': "Verteiler"
		},

		effect: {
			'fr-fr': "Soignez 20 dégâts de l'un de vos Pokémon de Banc.",
			'en-us': "Heal 20 damage from 1 of your Benched Pokémon.",
			'es-es': "Cura 20 puntos de daño a uno de tus Pokémon en Banca.",
			'it-it': "Cura uno dei tuoi Pokémon in panchina da 20 danni.",
			'pt-br': "Cure 20 pontos de dano de 1 dos seus Pokémon no Banco.",
			'de-de': "Heile 20 Schadenspunkte bei 1 Pokémon auf deiner Bank."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'fr-fr': "Collision",
			'en-us': "Ram",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "At night, Combee sleep in a group of about a hundred, packed closely together in a lump.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725088,
				tcgplayer: 509662,
				cardtrader: 255568
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725088,
				tcgplayer: 509662,
				cardtrader: 255568
			}
		},
	],

	illustrator: "HYOGONOSUKE",

	
}

export default card
