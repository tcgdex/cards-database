import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Steelix V",
		'fr-fr': "Steelix V",
		'es-es': "Steelix V",
		'it-it': "Steelix V",
		'pt-br': "Steelix V",
		'de-de': "Stahlos V"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [208],
	set: Set,
	hp: 250,

	types: [
		"Metal",
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Raging Hammer",
				'fr-fr': "Marteau Rageur",
				'es-es': "Martillo Furioso",
				'it-it': "Martelfuria",
				'pt-br': "Martelo Feroz",
				'de-de': "Wuthammer"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Iron Tackle",
				'fr-fr': "Charge de Fer",
				'es-es': "Bloqueo de Hierro",
				'it-it': "Azione Ferrea",
				'pt-br': "Golpe de Colisão Férreo",
				'de-de': "Eisentackle"
			},
			effect: {
				'en-us': "This Pokémon also does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
				'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 210,

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

	retreat: 4,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 512285,
				tcgplayer: 226568
			}
		},
	],
}

export default card
