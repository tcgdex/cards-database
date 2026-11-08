import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [643],
	set: Set,

	name: {
		'fr-fr': "Reshiram",
		'en-us': "Reshiram",
		'es-es': "Reshiram",
		'it-it': "Reshiram",
		'pt-br': "Reshiram",
		'de-de': "Reshiram"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Amazing Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	attacks: [{
		name: {
			'fr-fr': "Brasier Magnifique",
			'en-us': "Amazing Blaze",
			'es-es': "Llamarada Increíble",
			'it-it': "Fiamma Policroma",
			'pt-br': "Incêndio Incrível",
			'de-de': "Atemberaubende Feuersbrunst"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 60 dégâts.",
			'en-us': "This Pokémon also does 60 damage to itself.",
			'es-es': "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 60 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 60 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu."
		},

		damage: 270,
		cost: ["Fire", "Lightning", "Darkness"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "When Reshiram's tail flares, the heat energy moves the atmosphere and changes the world's weather."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539108,
				tcgplayer: 232402
			}
		},
	],
}

export default card
