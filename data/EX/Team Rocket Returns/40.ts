import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Pupitar",
		de: "Dunkles Pupitar"
	},

	illustrator: "Tomoaki Imakuni",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 70,

	types: [
		"Fighting",
		"Darkness",
	],

	evolveFrom: {
		en: "Larvitar",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Explosive Evolution",
				de: "Explosive Evolution"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance.) Then, search your deck for a card that evolves from Dark Pupitar and put it on Dark Pupitar. (This counts as evolving Dark Pupitar.) Shuffle your deck afterward.",
				de: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance.) Then search your deck for a card that evolved from Dark Pupitar and put it on Dark Pupitar. (This counts as evolving Dark Pupitar.) Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Double Tackle",
				de: "Double Tackle"
			},
			effect: {
				en: "Does 20 damage to each Defending Pokémon.",
				de: "Does 20 damage to each Defending Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276332,
		tcgplayer: 84643
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

