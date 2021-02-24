import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Girafarig",
		fr: "Girafarig",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		203,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Show Off",
				fr: "Crâneur",
			},
			effect: {
				en: "Search your deck for up to 2 basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu’à deux cartes Énergie de base, montrez-les à votre adversaire et ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre psy",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
