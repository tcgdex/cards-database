import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Inkay",
		fr: "Sepiatop",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		686,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Perplex",
				fr: "Affolement",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
