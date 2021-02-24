import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Flabébé",
		fr: "Flabébé",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		669,
	],
	hp: 40,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Secret Blessings",
				fr: "Bénédictions Secrètes",
			},
			effect: {
				en: "Shuffle 3 in any combination of Pokémon and basic Energy cards from your discard pile into your deck.",
				fr: "Choisissez une combinaison de 3 Pokémon et Énergies de base dans votre pile de défausse et mélangez-les avec votre deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
