import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Cacturne ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		332,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cacnea",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cursed Glare",
			},
			effect: {
				en: "As long as Cacturne ex is your Active Pokémon, your opponent can't attach any Special Energy cards (except for Darkness and Metal Energy cards) from his or her hand to his or her Active Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Psybeam",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spike Rend",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
