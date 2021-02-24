import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Alolan Sandslash",
		fr: "Sablaireau d’Alola",
	},
	illustrator: "kirisAki",
	rarity: "Common",
	category: "Trainer",

	set: Set,
	dexId: [
		28,
	],
	hp: 120,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},
	stage: "Stage1",



	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
