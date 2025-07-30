import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Roselia",
		fr: "Rosélia",
		es: "Roselia",
		it: "Roselia",
		pt: "Roselia",
		de: "Roselia"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		315,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Whip",
				fr: "Double Fouet",
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Relaxing Fragrance",
				fr: "Parfum Relaxant",
			},
			effect: {
				en: "Heal 30 damage and remove all Special Conditions from this Pokémon.",
				fr: "Soignez 30 dégâts et retirez tous les États Spéciaux de ce Pokémon.",
			},

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

	retreat: 1,

	thirdParty: {
		cardmarket: 280451,
		tcgplayer: 88824
	}
}

export default card
