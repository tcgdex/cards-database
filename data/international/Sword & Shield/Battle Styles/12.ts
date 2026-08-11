import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [665],
	set: Set,

	name: {
		'en-us': "Spewpa",
		'fr-fr': "Pérégrain",
		'es-es': "Spewpa",
		'it-it': "Spewpa",
		'pt-br': "Spewpa",
		'de-de': "Puponcho"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Scatterbug",
		'fr-fr': "Lépidonille",
		'es-es': "Scatterbug",
		'it-it': "Scatterbug",
		'pt-br': "Scatterbug",
		'de-de': "Purmel"
	},

	attacks: [{
		name: {
			'en-us': "Grass Cocooning",
			'fr-fr': "Cocon Vert",
			'es-es': "Abrigo Planta",
			'it-it': "Erbocorazza",
			'pt-br': "Casulo de Grama",
			'de-de': "Pflanzenhülle"
		},

		effect: {
			'en-us': "Heal 40 damage from this Pokémon.",
			'fr-fr': "Soignez 40 dégâts de ce Pokémon.",
			'es-es': "Cura 40 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 40 danni.",
			'pt-br': "Cure 40 pontos de dano deste Pokémon.",
			'de-de': "Heile 40 Schadenspunkte bei diesem Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'es-es': "Picadura",
			'it-it': "Coleomorso",
			'pt-br': "Picada",
			'de-de': "Käferbiss"
		},

		damage: 40,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "The beaks of birds can't begin to scratch its stalwart body. To defend itself, it spews powder."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 544956,
				tcgplayer: 234068
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544956,
				tcgplayer: 234068
			}
		},
	],
}

export default card
