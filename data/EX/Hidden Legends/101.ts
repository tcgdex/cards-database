import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Wigglytuff ex",
		fr: "Grodoudou ex",
		de: "Knuddeluff ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou"
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleepy Song",
				fr: "Chanson berçante",
				de: "Sleepy Song"
			},
			effect: {
				en: "Each Defending Pokémon is now Asleep.",
				fr: "Chaque Pokémon Défenseur est maintenant Endormi.",
				de: "Each Defending Pokémon is now Asleep."
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
				en: "Do the Wave",
				fr: "Faites la vague",
				de: "Do the Wave"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each of your Benched Pokémon.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon qui se trouve sur votre Banc.",
				de: "Does 30 damage plus 10 more damage for each of your Benched Pokémon."
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

	thirdParty: {
		cardmarket: 276175,
		tcgplayer: 90603
	},

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
