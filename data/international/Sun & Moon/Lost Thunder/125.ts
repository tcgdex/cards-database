import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Steelix",
		'fr-fr': "Steelix",
		'es-es': "Steelix",
		'it-it': "Steelix",
		'pt-br': "Steelix",
		'de-de': "Stahlos"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 180,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Onix",
		'fr-fr': "Onix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncement",
				'es-es': "Martillear",
				'it-it': "Martello",
				'pt-br': "Martelada",
				'de-de': "Einhämmern"
			},

			damage: 90,

		},
		{
			cost: [
				"Metal",
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
				'en-us': "This Pokémon does 50 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 50 dégâts.",
				'es-es': "Este Pokémon se hace 50 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 50 danni a se stesso.",
				'pt-br': "Este Pokémon causa 50 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 50 Schadenspunkte zu."
			},
			damage: 170,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It chews its way through boulders with its sturdy jaws. Its eyes can see in the darkness underground.",
	},

	thirdParty: {
		cardmarket: 365762,
		tcgplayer: 178940
	}
}

export default card
