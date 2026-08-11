import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キングラー（デルタ種）",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [99],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: {
				'ja-jp': "ボディスラム",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 30,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				'ja-jp': "プロップアップピンチャー",
			},
			effect: {
				'ja-jp': "Kinglerにポケモンツールカードが付属している場合、この攻撃は40ダメージに加えて40ダメージを与えます。",
			},
		},
	],

	retreat: 3,

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
