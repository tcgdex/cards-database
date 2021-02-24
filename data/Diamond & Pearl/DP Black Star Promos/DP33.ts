import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Dusknoir",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		477,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Dusclops",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dark Hide",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, look at your opponent's hand, choose a Pokémon you find there, and put it on the bottom of his or her deck. This power can't be used if Dusknoir is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Reaper Pulse",
			},
			effect: {
				en: "Move up to 2 damage counters from Dusknoir to 1 of your opponent's Benched Pokémon.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],




}

export default card
