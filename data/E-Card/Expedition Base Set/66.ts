import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Tyranitar",
	},
	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pupitar",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Aura",
			},
			effect: {
				en: "All Energy attached to Tyranitar is Dark instead of its usual type.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Stamp",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 10 more damage and does 10 damage to each of your opponent's Benched Pokémon, if any. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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
