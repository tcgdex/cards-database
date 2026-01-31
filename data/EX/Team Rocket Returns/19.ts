import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Tyranitar",
		de: "Dunkles Despotar"
	},

	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Dark Pupitar",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grind",
				de: "Grind"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Dark Tyranitar.",
				de: "Does 10 damage plus 10 more damage for each Energy attached to Dark Tyranitar."
			},
			damage: "10+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Tail",
				de: "Spinning Tail"
			},
			effect: {
				en: "Does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite Off",
				de: "Bite Off"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 70 damage plus 50 more damage.",
				de: "If the Defending Pokémon is Pokémon-ex, this attack does 70 damage plus 50 more damage."
			},
			damage: "70+",

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
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276311,
		tcgplayer: 84661
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"]
		}
	]
}

export default card
