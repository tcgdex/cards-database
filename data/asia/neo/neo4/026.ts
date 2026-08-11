import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "Psyduck",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [54],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "フリッパースプラッシュ",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "片頭痛",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。尾の場合、Psyduckは混乱しています。",
			},
			damage: 20,
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
