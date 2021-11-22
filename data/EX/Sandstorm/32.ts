import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Baltoy",
		fr: "Balbuto"
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		343,
	],
	hp: 50,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rapid Spin",
				fr: "Tour rapide"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch Baltoy with 1 of your Benched Pokémon, if any.",
				fr: "Votre adversaire échange le Pokémon Défenseur contre un des Pokémon de son Banc, s'il en a. Vous échangez Balbuto contre un des Pokémon de votre Banc, si vous en avez."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
