import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [754],
	set: Set,

	name: {
		'en-us': "Lurantis",
		'fr-fr': "Floramantis",
		'es-es': "Lurantis",
		'it-it': "Lurantis",
		'pt-br': "Lurantis",
		'de-de': "Mantidea"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Fomantis",
		'fr-fr': "Mimantis",
		'es-es': "Fomantis",
		'it-it': "Fomantis",
		'pt-br': "Fomantis",
		'de-de': "Imantis"
	},

	attacks: [{
		name: {
			'en-us': "Leaf Drain",
			'fr-fr': "Feuille Sangsue",
			'es-es': "Hoja Drenante",
			'it-it': "Assorbifoglia",
			'pt-br': "Dreno Folha",
			'de-de': "Blattsauger"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'en-us': "Solar Cutter",
			'fr-fr': "Coupe Solaire",
			'es-es': "Corte Solar",
			'it-it': "Taglio Solare",
			'pt-br': "Cortador Solar",
			'de-de': "Solarschneider"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "As it slashes into its enemies, it looks like it's dancing. Its elegant appearance has led some to call it the most glamorous Grass Pokémon."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 544976,
				tcgplayer: 234078
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544976,
				tcgplayer: 234078
			}
		},
	],
}

export default card
