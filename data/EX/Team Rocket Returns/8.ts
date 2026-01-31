import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Octillery",
		de: "Dunkles Octillery"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		224,
	],

	hp: 70,

	types: [
		"Water",
		"Darkness",
	],

	evolveFrom: {
		en: "Remoraid",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Black Suction Cups",
				de: "Black Suction Cups"
			},
			effect: {
				en: "Does 10 damage to each Defending Pokémon. Flip a coin. If heads, each Defending Pokémon is now Paralyzed.",
				de: "Does 10 damage to each Defending Pokémon. Flip a coin. If heads, each Defending Pokémon is now Paralyzed."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ink Blast",
				de: "Ink Blast"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Energy attached to Dark Octillery but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				de: "Does 30 damage plus 10 more damage for each Energy attached to Dark Octillery but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276300,
		tcgplayer: 84633
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
		}
	]
}

export default card
