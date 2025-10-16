import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity ex",
	},

	suffix: "EX",
	rarity: "None",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],
	stage: "Stage1",
	illustrator: "Anderson",
	dexId: [849],

	attacks: [
		{
			cost: ["Lightning","Lightning","Colorless"],
			name: {
				en: "Stumming Thunder",
			},
			effect: {
				en:	"Discard 2 Energy from this Pokémon."
			},
			damage: "240",
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			stamp: ["illustration-contest-2024"]
		},
	]
}

export default card
