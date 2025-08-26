import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ミスティのラプラ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [131],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "甘い歌",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、ポケモンのそれぞれから1つのダメージカウンターを削除します。",
			},
		},
		{
			cost: ["Water", "Water"],
			name: {
				ja: "巨大な波",
			},
			effect: {
				ja: "MistyのLaprasは次のターン中に攻撃することはできません。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
