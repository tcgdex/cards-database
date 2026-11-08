import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [884],

	name: {
		'en-us': "Duraludon",
		'fr-fr': "Duralugon",
		'es-es': "Duraludon",
		'it-it': "Duraludon",
		'pt-br': "Duraludon",
		'de-de': "Duraludon"
	},

	illustrator: "kawayoo",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Metal",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Raging Claws",
				'fr-fr': "Griffes Enragées",
				'es-es': "Garras Furiosas",
				'it-it': "Furiartigli",
				'pt-br': "Garras Devastadoras",
				'de-de': "Wutklauen"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Power Blast",
				'fr-fr': "Violente Déflagration",
				'es-es': "Estallido Vigoroso",
				'it-it': "Forzacolpo",
				'pt-br': "Explosão Poderosa",
				'de-de': "Powerschuss"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un'Energia da questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its body resembles polished metal, and it's both lightweight and strong. The only drawback is that it rusts easily."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 512355,
				tcgplayer: 226585
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 883784
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512355,
				tcgplayer: 226585
			}
		},
	],
}

export default card
