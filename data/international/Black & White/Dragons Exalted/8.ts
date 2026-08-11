import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Beautifly",
		'fr-fr': "Charmillon",
		'es-es': "Beautifly",
		'it-it': "Beautifly",
		'pt-br': "Beautifly",
		'de-de': "Papinella"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		267,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Silcoon",
		'fr-fr': "Armulys",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Triple Energy",
				'fr-fr': "Triple Énergie",
			},
			effect: {
				'en-us': "Search your deck for 3 different types of basic Energy cards and attach them to your Pokémon in any way you like. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck 3 différents types de cartes Énergie de base et attachez-les à vos Pokémon de la manière que vous voulez. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drainpour",
				'fr-fr': "Sangsue-Déluge",
			},
			effect: {
				'en-us': "Heal 40 damage from each of your Benched Pokémon.",
				'fr-fr': "Soignez 40 dégâts à chacun de vos Pokémon de Banc.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Despite its looks, it is aggressive. It jabs with its long, thin mouth if disturbed while collecting pollen.",
	},

	thirdParty: {
		cardmarket: 280447,
		tcgplayer: 83760
	}
}

export default card
