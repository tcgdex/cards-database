import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus"
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		92,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slow Trip Gas",
				fr: "Gaz ralentisseur"
			},
			effect: {
				en: "At the end of your opponent's next turn, the Defending Pokémon is now Confused.",
				fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur est Confus."
			},

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
