import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
	},
	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		93,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pain Amplifier",
				fr: "Amplificateur de Douleur",
			},
			effect: {
				en: "Put 2 damage counters on each of your opponent's Pokémon that has any damage counters on it.",
				fr: "Placez 2 marqueurs de dégâts sur chacun des Pokémon de votre adversaire ayant au moins un marqueur de dégâts.",
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
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
