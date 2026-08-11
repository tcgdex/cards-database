import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [343],
	set: Set,

	name: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
		'es-es': "Baltoy",
		'it-it': "Baltoy",
		'pt-br': "Baltoy",
		'de-de': "Puppance"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Self-Destruct",
			'fr-fr': "Destruction",
			'es-es': "Autodestrucción",
			'it-it': "Autodistruzione",
			'pt-br': "Autodestruição",
			'de-de': "Finale"
		},

		effect: {
			'en-us': "This Pokémon also does 60 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 60 dégâts.",
			'es-es': "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 60 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 60 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu."
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It was discovered in ancient ruins. While moving, it constantly spins. It stands on one foot even when asleep."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545396,
				tcgplayer: 234223
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545396,
				tcgplayer: 234223
			}
		},
	],
}

export default card
