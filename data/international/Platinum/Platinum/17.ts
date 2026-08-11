import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Weavile G",
		'fr-fr': "Dimoret ",
		'de-de': "Snibunna G"
	},

	illustrator: "Makoto Imai",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [461],

	hp: 80,

	types: [
		"Darkness"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{

			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Call for Family"
			},
			effect: {
				'en-us': "Search your deck for up to 2 basic Pokémon SP and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base SP et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for up to 2 basic Pokémon SP and put them onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Team Attack",
				'fr-fr': "Attaque de groupe",
				'de-de': "Team Attack"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Pokémon SP you have in play.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon SP que vous avez en jeu.",
				'de-de': "Does 10 damage plus 10 more damage for each Pokémon SP you have in play."
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

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 90536,
				cardmarket: 278438
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278438,
				tcgplayer: 90536
			}
		}
	],

	retreat: 0
}

export default card
