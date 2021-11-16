import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Staryu",
		fr: "Stari"
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		120,
	],
	hp: 50,
	types: [
		"Water",
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
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch Staryu with 1 of your Benched Pokémon, if any.",
				fr: "Votre adversaire échange le Pokémon Défenseur contre 1 des Pokémon de son Banc, s'il en a. Vous échangez Stari contre 1 des Pokémon de votre Banc, si vous en avez."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
