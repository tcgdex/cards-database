import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークオクタリリー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [224],
	hp: 60,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "インクブラスト",
			},
			effect: {
				ja: "この攻撃は、20のダメージに加えて20のダメージを加えて、ダークオクリリーに取り付けられた各エネルギーに対してさらに10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
			},
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "触手ラップ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。テールの場合、対戦相手の次のターン中に、対戦相手はディフェンディングポケモンを退却するために無色になります。",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
