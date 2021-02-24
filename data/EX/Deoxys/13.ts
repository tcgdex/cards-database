import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Ninjask",
	},
	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		291,
	],
	hp: 70,
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
				en: "Fast Protection",
			},
			effect: {
				en: "Prevent all effects, including damage, done to Ninjask by your opponent's attacks from his or her Basic Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swords Dance",
			},
			effect: {
				en: "During your next turn, Ninjask's Slash attack's base damage is 80.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slash",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
