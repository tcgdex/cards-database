import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Salamence",
		fr: "Drattak",
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Évolution Δ",
			},
			effect: {
				fr: "Vous pouvez jouer cette carte de votre main pour faire évoluer un Pokémon pendant votre premier tour ou pendant le tour où vous le jouez.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Goons",
			},
			effect: {
				en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Pulse",
			},
			effect: {
				en: "Discard the top card of your deck.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
