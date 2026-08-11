import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pikachu",
	},
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "Kazuki Minami",
	dexId: [25],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'en-us': "Unwind",
			},
			effect: {
				'en-us': 	"Heal 20 damage from this Pokémon."
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			stamp: ["illustration-contest-2024"],
			thirdParty: {
				cardmarket: 810398,
				tcgplayer: 620106
			},
		},
	]
}

export default card
