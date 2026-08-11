import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Cradily",
		'fr-fr': "Vacilys",
		'es-es': "Cradily",
		'it-it': "Cradily",
		'pt-br': "Cradily",
		'de-de': "Wielie"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		346,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Lileep",
		'fr-fr': "Lilia",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Lifesplosion",
				'fr-fr': "Explovie",
			},
			effect: {
				'en-us': "For each Energy attached to this Pokémon, search your deck for a Stage 2 Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Pour chaque Énergie attachée à ce Pokémon, cherchez un Pokémon de Niveau 2 dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Drain",
				'fr-fr': "Spirale Épuisante",
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
			},
			damage: 60,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It lives in the shallows of warm seas. When the tide goes out, it digs up prey from beaches.",
	},

	thirdParty: {
		cardmarket: 281025,
		tcgplayer: 84455
	}
}

export default card
