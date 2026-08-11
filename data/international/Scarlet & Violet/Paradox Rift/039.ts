import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [458],
	set: Set,

	name: {
		'en-us': "Mantyke",
		'fr-fr': "Babimanta",
		'es-es': "Mantyke",
		'it-it': "Mantyke",
		'pt-br': "Mantyke",
		'de-de': "Mantirps"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Buoyant Healing",
			'fr-fr': "Soin Flottant",
			'es-es': "Curación Boyante",
			'it-it': "Galleggiacura",
			'pt-br': "Cura Flutuante",
			'de-de': "Treibende Heilung"
		},

		effect: {
			'en-us': "Heal 120 damage from 1 of your Benched Pokémon.",
			'fr-fr': "Soignez 120 dégâts de l'un de vos Pokémon de Banc.",
			'es-es': "Cura 120 puntos de daño a uno de tus Pokémon en Banca.",
			'it-it': "Cura uno dei tuoi Pokémon in panchina da 120 danni.",
			'pt-br': "Cure 120 pontos de dano de 1 dos seus Pokémon no Banco.",
			'de-de': "Heile 120 Schadenspunkte bei 1 Pokémon auf deiner Bank."
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "It swims along with a school of Remoraid, and they'll all fight together to repel attackers.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740515,
				tcgplayer: 523648,
				cardtrader: 265125
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740515,
				tcgplayer: 523648,
				cardtrader: 265125
			}
		},
	],

	illustrator: "miki kudo",

	
}

export default card
