import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Gardevoir",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Kirlia",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psy Shadow",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Psychic Energy card and attach it to 1 of your Pokémon. Put 2 damage counters on that Pokémon. Shuffle your deck afterward. This power can't be used if Gardevoir is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Burst",
			},
			effect: {
				en: "Does 10 damage times the total amount of Energy attached to Gardevoir and the Defending Pokémon.",
			},
			damage: 10,

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
