import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Banette",
		fr: "Branette"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		354,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Shuppet",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Grudge",
				fr: "Rancune"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Prize card your opponent has taken.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque carte Récompense récoltée par votre adversaire."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Bench Manipulation",
				fr: "Manipulation de Banc"
			},
			effect: {
				en: "Your opponent flips a number of coins equal to the number of his or her Benched Pokémon. This attack does 40 damage times the number of tails. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Votre adversaire lance autant de pièces qu'il a de Pokémon de Banc. Cette attaque inflige 40 dégâts multipliés par le nombre de piles. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse et la Résistance."
			},
			damage: "40×",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
