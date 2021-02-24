import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Magby",
		fr: "Magby",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		240,
	],
	hp: 30,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sweet Sleeping Face",
				fr: "Joli visage endormi",
			},
			effect: {
				en: "As long as Magby is Asleep, prevent all damage done to Magby by attacks.",
				fr: "Tant que Magby est Endormi, empêchez tous les dégâts qui lui sont infligés par des attaques.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Play with Fire",
				fr: "Jouer avec le feu",
			},
			effect: {
				en: "The Defending Pokémon is now Burned. Magby is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé. Magby est maintenant Endormi.",
			},

		},
	],






}

export default card
