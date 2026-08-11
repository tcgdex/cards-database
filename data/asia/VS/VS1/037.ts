import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チャックのグランブル",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [210],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ro音",
			},
			effect: {
				'ja-jp': "対戦相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御ポケモンでそれを切り替えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "chomp",
			},
			effect: {
				'ja-jp': "チャックのグランブルのダメージカウンターの数に等しい多数のコインをひっくり返します。この攻撃は、10ダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
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
			stamp: ["1st-edition"],
		},
	],
};

export default card
