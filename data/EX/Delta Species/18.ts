import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Vaporeon δ",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		134,
	],
	hp: 70,
	types: [
		"Water",
		"Metal",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Delta Search",
			},
			effect: {
				en: "Search your deck for a Holon Energy card and attach it to Vaporeon. Shuffle your deck afterward.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Return Wave",
			},
			effect: {
				en: "You may return an Energy card attached to Vaporeon to your hand. If you do, choose an Energy card attached to the Defending Pokémon and return it to your opponent's hand.",
			},
			damage: 50,

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
