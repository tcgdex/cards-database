import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Machoke",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		67,
	],
	hp: 60,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Machop",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Drag Off",
			},
			effect: {
				en: "Before doing damage, choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon. Do the damage to the new Defending Pokémon. This attack can't be used if your opponent has no Benched Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Knock Back",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
