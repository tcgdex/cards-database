import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Weavile G",
		fr: "Dimoret ",
	},
	illustrator: "Makoto Imai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		461,
	],
	hp: 80,
	types: [
		"Darkness",
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{

			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
			},
			effect: {
				en: "Search your deck for up to 2 basic Pokémon SP and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base SP et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Team Attack",
				fr: "Attaque de groupe",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Pokémon SP you have in play.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon SP que vous avez en jeu.",
			},
			damage: 10,

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




}

export default card
