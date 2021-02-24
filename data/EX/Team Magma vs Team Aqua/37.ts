import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Mightyena",
	},
	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		262,
	],
	hp: 80,
	types: [
		"Darkness",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Call for Help",
			},
			effect: {
				en: "Once during your turn (before your attack), if Team Magma's Mightyena is your Active Pokémon, you may search your deck for a Pokémon with Team Magma in its name, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Team Magma's Mightyena is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Lunge",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},
			damage: 50,

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
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
