import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Vikavolt",
		fr: "Lucanon",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		738,
	],
	hp: 150,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Charjabug",
		fr: "Chrysapile",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stealthy Body",
			},
			effect: {
				en: "If there is any Stadium card in play, this Pokémon has no Weakness.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electricannon",
			},
			effect: {
				en: "You may discard all {L} Energy from this Pokémon. If you do, this attack does 100 more damage.",
			},
			damage: 120,

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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
