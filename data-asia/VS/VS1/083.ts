import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ブルーノのヒットモンチャン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [107],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "彗星パンチ",
			},
			effect: {
				ja: "4コインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "ラッキーパンチ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて30ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
			},
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
