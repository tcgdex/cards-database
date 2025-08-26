import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "exeggcute",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [102],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "スリープパウダー",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 10,
		},
		{
			cost: ["Psychic"],
			name: {
				ja: "PsyShock",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
