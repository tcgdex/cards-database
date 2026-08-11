import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
		'es-es': "Espurr",
		'it-it': "Espurr",
		'pt-br': "Espurr",
		'de-de': "Psiau"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		677,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Energy Teaser",
				'fr-fr': "Énergie Provocante",
				'es-es': "Señuelo Energía",
				'it-it': "Dispetto Energetico",
				'pt-br': "Instigador de Energia",
				'de-de': "Energieköder"
			},
			effect: {
				'en-us': "Move an Energy from 1 of your opponent’s Benched Pokémon to another of their Pokémon.",
				'fr-fr': "Déplacez une Énergie de l’un des Pokémon de Banc de votre adversaire vers un autre de ses Pokémon.",
				'es-es': "Mueve 1 Energía de 1 de los Pokémon en Banca de tu rival a otro de sus Pokémon.",
				'it-it': "Sposta un’Energia da uno dei Pokémon in panchina del tuo avversario a un altro dei suoi Pokémon.",
				'pt-br': "Mova 1 Energia de 1 dos Pokémon no Banco do seu oponente para outro Pokémon dele(a).",
				'de-de': "Verschiebe 1 Energie von 1 Pokémon auf der Bank deines Gegners auf 1 anderes seiner Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has enough psychic energy to blast everything within 300 feet of itself, but it has no control over its power.",
	},

	thirdParty: {
		cardmarket: 355563,
		tcgplayer: 165695
	}
}

export default card
