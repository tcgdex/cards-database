import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Swadloon",
		fr: "Couverdure",
		es: "Swadloon",
		it: "Swadloon",
		pt: "Swadloon",
		de: "Folikon"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		541,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Sewaddle",
		fr: "Larveyette",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Razor Leaf",
				fr: "Double Tranch'Herbe",
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 279970
	}
}

export default card
