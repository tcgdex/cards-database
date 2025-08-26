import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "航海",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [119],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "上昇する突進",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
			},
		},
		{
			cost: ["Water", "Water"],
			name: {
				ja: "ホーンスワイプ",
			},
			effect: {
				ja: "2つのコインをフリップします。両方がヘッドである場合、この攻撃は20ダメージに加えて40ダメージを与えます。それらの1または両方が尾の場合、この攻撃は20のダメージを与えます。",
			},
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
