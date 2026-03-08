import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Weavile G",
		fr: "Dimoret ",
		de: "Snibunna G"
	},

	illustrator: "Makoto Imai",
	rarity: "Rare Holo",
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
				de: "Call for Family"
			},
			effect: {
				en: "Search your deck for up to 2 basic Pokémon SP and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base SP et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Search your deck for up to 2 basic Pokémon SP and put them onto your Bench. Shuffle your deck afterward."
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
				de: "Team Attack"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Pokémon SP you have in play.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon SP que vous avez en jeu.",
				de: "Does 10 damage plus 10 more damage for each Pokémon SP you have in play."
			},
			damage: "10+",

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

	thirdParty: {
		tcgplayer: 90536
	},

	variants:[
		{
			type:"holo"
		},
		{
			type:"reverse"
		}
	]
}

export default card
