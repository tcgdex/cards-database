import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "クレアの爆風",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [9],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ハイドロブラスト",
			},
			effect: {
				ja: "Clair's Blastoiseに取り付けられた各水エネルギーのコインをひっくり返します。この攻撃は20のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
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
