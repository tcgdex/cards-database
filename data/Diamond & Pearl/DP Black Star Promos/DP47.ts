import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Rayquaza C",
	},
	illustrator: undefined,
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 120,
	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dragon Spirit",
			},
			effect: {
				en: "If Rayquaza  is your Active Pokémon and is damaged but not Knocked Out by an opponent's attack, you may search your discard pile for an Energy card and attach it to Rayquaza .",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Final Blowup",
			},
			effect: {
				en: "Discard all Energy attached to Rayquaza . Ignore this effect if you have no cards in your hand.",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
