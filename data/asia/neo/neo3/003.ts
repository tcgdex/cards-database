import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "スキプルーム",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [188],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ホップ",
			},
			damage: 20,
		},
		{
			cost: ["Grass"],
			name: {
				ja: "神秘的なパウダー",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
