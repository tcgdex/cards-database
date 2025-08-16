import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Darkrai",
		fr: "Darkrai",
	},

	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		491,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Cutter",
				fr: "Tranch'Obscur",
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Abyssal Sleep",
				fr: "Sommeil Abyssal",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep. Your opponent flips 2 coins instead of 1 between turns. If either of them is tails, that Pokémon is still Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Votre adversaire lance 2 pièces au lieu d'une entre chaque tour. Si vous obtenez au moins un côté pile, le Pokémon reste Endormi.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281306
	}
}

export default card
