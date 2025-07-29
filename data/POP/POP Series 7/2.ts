import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Gallade",
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		475,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Kirlia",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sonic Blade",
			},
			effect: {
				en: "Put damage counters on the Defending Pokémon until it is 50 HP away from being Knocked Out. If you do, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Cut",
			},
			effect: {
				en: "You may choose as many of your face-down Prize cards as you like and put them face up. If you do, this attack does 60 damage plus 20 more damage for each Prize card you chose. (These cards remain face up for the rest of the game.)",
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	description: {
		en: "A master of courtesy and swordsmanship, it fights using extending swords on it elbows."
	},

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278034
	}
}

export default card
