import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
	},
	rarity: "None",
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
				en: "Unwind",
			},
			effect: {
				en:	"Heal 20 damage from this Pokémon."
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
			stamp: ["illustration-contest-2024"]
		},
	]
}

export default card
