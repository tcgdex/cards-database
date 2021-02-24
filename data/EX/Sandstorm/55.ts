import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Xatu",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		178,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Natu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Healing Wind",
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove 1 damage counter from each of your Active Pokémon. This power can't be used if Xatu is affected by a Special Condition.",
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
				en: "Psyimpact",
			},
			effect: {
				en: "Put 1 damage counter on each of your opponent's Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
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
