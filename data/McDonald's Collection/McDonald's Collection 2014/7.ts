import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2014'

const card: Card = {
	dexId: [
		679,
	],
	illustrator: "5ban Graphics",
	description: {
		en: "Apparently this Pokémon is born when a departed spirit inhabits a sword. It attaches itself to people and drinks their life force."
	},
	set: Set,
	name: {
		en: "Honedge",
		fr: "Monorpale",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Metal",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Continuous Slice",
				fr: "Perpétranche",
			},
			damage: "30×",
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
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
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281659,
				tcgplayer: 110412
			}
		}
	]
}

export default card
