import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Hitmontop",
		fr: "Kapoera",
		de: "Kapoera"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [237],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				fr: "Double pied",
				de: "Double Kick"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Flip 2 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Triple Spin",
				fr: "Triple tour",
				de: "Triple Spin"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, switch Hitmontop with 1 of your Benched Pokémon, if any.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces. Si vous obtenez au moins 2 faces, échangez Tygnon contre un des Pokémon de votre Banc, si vous en avez.",
				de: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, switch Hitmontop with 1 of your Benched Pokémon, if any."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86113,
				cardmarket: 275156
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86113,
				cardmarket: 275156
			}
		},
	]
}

export default card
