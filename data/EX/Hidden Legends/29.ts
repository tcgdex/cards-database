import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Beldum",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		374,
	],
	hp: 50,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Call",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a Water Basic Pokémon and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Beldum is affected by a Special Condition.\"",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Charge",
			},
			effect: {
				en: "Put 1 damage counter on Beldum.",
			},
			damage: 30,

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
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
