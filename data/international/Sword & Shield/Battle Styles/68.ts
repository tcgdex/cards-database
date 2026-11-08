import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [95],
	set: Set,

	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'es-es': "Onix",
		'it-it': "Onix",
		'pt-br': "Onix",
		'de-de': "Onix"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Rock Throw",
			'fr-fr': "Jet-Pierres",
			'es-es': "Lanzarrocas",
			'it-it': "Sassata",
			'pt-br': "Lançamento de Rocha",
			'de-de': "Steinwurf"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Rocky Tackle",
			'fr-fr': "Tacle Rocailleux",
			'es-es': "Placaje Rocoso",
			'it-it': "Azione Rocciosa",
			'pt-br': "Investida Pedregosa",
			'de-de': "Steiniger Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 60 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 60 dégâts.",
			'es-es': "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 60 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 60 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu."
		},

		damage: 170,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545456,
				tcgplayer: 234244
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545456,
				tcgplayer: 234244
			}
		},
	],
}

export default card
