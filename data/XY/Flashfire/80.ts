import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		143,
	],
	hp: 130,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stir and Snooze",
				fr: "Sommeil Lourd",
			},
			effect: {
				en: "If this Pokémon is Asleep, flip 2 coins instead of 1 between turns. If either of them is tails, this Pokémon is still Asleep.",
				fr: "Si ce Pokémon est Endormi, lancez 2 pièces au lieu d'une entre chaque tour. Si vous obtenez au moins un côté pile, ce Pokémon reste Endormi.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleepy Press",
				fr: "Pression Torpide",
			},
			effect: {
				en: "Heal 20 damage from this Pokémon. This Pokémon is now Asleep.",
				fr: "Soignez 20 dégâts à ce Pokémon. Ce Pokémon est maintenant Endormi.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
