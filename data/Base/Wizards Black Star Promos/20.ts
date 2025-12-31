import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Headache",
				fr: "Migraine"
			},
			effect: {
				en: "Your opponent can't play Trainer cards during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de carte Dresseur pendant son prochain tour."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Alors qu'il trompe ses ennemis avec son air niais, ce Pokémon rusé utilise des pouvoirs psychokinésiques."
	},

	variants: [
		{
			type: "normal"
		}
	]
}

export default card
