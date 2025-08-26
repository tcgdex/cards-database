import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "チャームレオン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [5],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "怖い顔",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に攻撃したり退却したりすることはできません。",
			},
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "炎の尾",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
