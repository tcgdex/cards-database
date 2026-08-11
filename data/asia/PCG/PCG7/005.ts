import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "プライム（デルタ種）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [57],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				'ja-jp': "難破船",
			},
			effect: {
				'ja-jp': "スタジアムカードがプレイされている場合、この攻撃は30ダメージに加えて30ダメージを与えます。そのスタジアムカードを捨ててください。",
			},
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				'ja-jp': "怒りの炎",
			},
			effect: {
				'ja-jp': "プライムに取り付けられた2つのエネルギーを捨てます。この攻撃は、Primeapeのダメージカウンターごとに10ダメージに加えて20のダメージを与えます。",
			},
		},
	],


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
