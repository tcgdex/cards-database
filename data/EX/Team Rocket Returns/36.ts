import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Gyarados",
		de: "Dunkles Garados"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 80,

	types: [
		"Water",
		"Darkness",
	],

	evolveFrom: {
		en: "Magikarp",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				de: "Sharp Fang"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Streak",
				de: "Dark Streak"
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon is now Paralyzed.",
				de: "Flip a coin. If heads, each Defending Pokémon is now Paralyzed."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	abilities: [{
		type: 'Poke-BODY',
		name: {
			de: "Dark Scale"
		},

		effect: {
			de: "If Dark Gyarados is your Active Pokémon and is Knocked Out by an opponent's attack, put 3 damage counters on the Attacking Pokémon."
		}
	}],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276328,
		tcgplayer: 84608
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

