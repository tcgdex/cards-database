import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Parasect",
		'fr-fr': "Parasect",
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		47,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Paras",
		'fr-fr': "Paras",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Colorful Spores",
				'fr-fr': "Spores Colorées",
			},
			effect: {
				'en-us': "Choose 3 of your Pokémon. For each of those Pokémon, search your deck for a different type of basic Energy card and attach it to that Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Choisissez 3 de vos Pokémon. Pour chacun de ces Pokémon, cherchez une carte Énergie de base de type différent dans votre deck et attachez-la au Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "X-Scissor",
				'fr-fr': "Plaie-Croix",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The larger the mushroom on its back grows, the stronger the mushroom spores it scatters.",
	},

	thirdParty: {
		cardmarket: 288449,
		tcgplayer: 113665
	}
}

export default card
