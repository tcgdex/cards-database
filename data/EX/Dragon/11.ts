import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Shedinja",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		292,
	],
	hp: 30,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nincada",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Wonder Guard",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Shedinja by your opponent's Evolved Pokémon and Pokémon-ex.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Damage Curse",
			},
			effect: {
				en: "Put 1 damage counter, plus 1 more damage counter for each damage counter on Shedinja, on the Defending Pokémon.",
			},

		},
	],






}

export default card
