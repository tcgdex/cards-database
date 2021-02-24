import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Flareon δ",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 70,
	types: [
		"Fire",
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
				en: "Search your deck for a Holon Energy card and attach it to Flareon. Shuffle your deck afterward.",
			},
			damage: 10,

		},
		{

			name: {
				en: "Return Burn",
			},
			effect: {
				en: "You may return an Energy card attached to Flareon to your hand. If you do, the Defending Pokémon is now Burned.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
