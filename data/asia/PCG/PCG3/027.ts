import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "quagsire",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [195],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "飽和",
			},
			effect: {
				ja: "手からQuagsireに水エネルギーカードを取り付けるときは、Quagsireからすべての特別な条件と2つのダメージカウンターを削除します。",
			},
		}],

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "ハイパーポンプ",
			},
			effect: {
				ja: "20ダメージに加えて、Quagsireに取り付けられた基本エネルギーカードごとに20のダメージがさらに20件ありますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で60以上のダメージを追加することはできません。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
