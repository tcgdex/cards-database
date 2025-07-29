import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Carnivine",
		fr: "Vortente",
		es: "Carnivine",
		it: "Carnivine",
		pt: "Carnivine",
		de: "Venuflibis"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		455,
	],

	hp: 90,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Lure Poison",
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Poisoned.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Spit Squall",
			},
			effect: {
				en: "Your opponent puts the Defending Pokémon and all cards attached to it into his or her hand.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280333
	}
}

export default card
