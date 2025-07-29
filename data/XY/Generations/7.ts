import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
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
		en: "Paras",
		fr: "Paras",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Colorful Spores",
				fr: "Spores Colorées",
			},
			effect: {
				en: "Choose 3 of your Pokémon. For each of those Pokémon, search your deck for a different type of basic Energy card and attach it to that Pokémon. Shuffle your deck afterward.",
				fr: "Choisissez 3 de vos Pokémon. Pour chacun de ces Pokémon, cherchez une carte Énergie de base de type différent dans votre deck et attachez-la au Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
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

	thirdParty: {
		cardmarket: 288449
	}
}

export default card
