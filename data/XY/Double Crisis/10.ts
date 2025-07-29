import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma's Baltoy",
		fr: "Balbuto de la Team Magma",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		343,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Telekinesis",
				fr: "Lévikinésie",
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 282521
	}
}

export default card
