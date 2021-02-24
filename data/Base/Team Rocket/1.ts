import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Alakazam",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		65,
	],
	hp: 60,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Kadabra",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Teleport Blast",
			},
			effect: {
				en: "You may switch Dark Alakazam with 1 of your Benched Pokémon (Do the damage before switching the Pokémon).",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Mind Shock",
			},
			effect: {
				en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
			},
			damage: 40,

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
