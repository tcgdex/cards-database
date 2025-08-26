import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ジャニーンの毒",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [49],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "魔法のほこり",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今、眠っている、混乱したり、麻痺したり、毒殺されたりします（あなたの選択）。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "かみそりの風",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
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
