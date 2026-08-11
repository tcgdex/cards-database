import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Wigglytuff ex",
		'fr-fr': "Grodoudou ex",
		'de-de': "Knuddeluff ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [40],

	hp: 100,

	stage: "Stage1",
	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sleepy Song",
				'fr-fr': "Chanson berçante",
				'de-de': "Sleepy Song"
			},
			effect: {
				'en-us': "Each Defending Pokémon is now Asleep.",
				'fr-fr': "Chaque Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Each Defending Pokémon is now Asleep."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Do the Wave",
				'fr-fr': "Faites la vague",
				'de-de': "Do the Wave"
			},
			effect: {
				'en-us': "Does 30 damage plus 10 more damage for each of your Benched Pokémon.",
				'fr-fr': "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon qui se trouve sur votre Banc.",
				'de-de': "Does 30 damage plus 10 more damage for each of your Benched Pokémon."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90603,
				cardmarket: 276175
			}
		},
	]
}

export default card
