import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Banette",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		354,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Shuppet",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Safeguard",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Banette by your opponent's Pokémon-ex.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Night Murmurs",
			},
			effect: {
				en: "If the Defending Pokémon is a Basic Pokémon, that Pokémon is now Confused.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
