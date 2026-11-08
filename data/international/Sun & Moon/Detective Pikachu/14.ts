import { Card } from 'models/database/card'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},

	illustrator: "Framestore",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		39,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Healing Melody",
				'fr-fr': "Mélodie Apaisante",
				'es-es': "Melodía Curativa",
				'it-it': "Cura Melodiosa",
				'pt-br': "Melodia Curativa",
				'de-de': "Heilende Melodie"
			},
			effect: {
				'en-us': "Heal 10 damage from each of your Pokémon.",
				'fr-fr': "Soignez 10 dégâts à chacun de vos Pokémon.",
				'es-es': "Cura 10 puntos de daño a cada uno de tus Pokémon.",
				'it-it': "Cura ciascuno dei tuoi Pokémon da 10 danni.",
				'pt-br': "Cure 10 pontos de dano de cada um dos seus Pokémon.",
				'de-de': "Heile 10 Schadenspunkte bei jedem deiner Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Recordings of Jigglypuff's strange lullabies can be purchased from department stores. These CDs can be found near the bedding area.",
	},

	thirdParty: {
		cardmarket: 370627,
		tcgplayer: 186022
	}
}

export default card
