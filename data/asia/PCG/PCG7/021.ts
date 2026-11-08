import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カブトップス（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [141],
	hp: 100,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'ja-jp': "重要な排水",
			},
			effect: {
				'ja-jp': "防御ポケモンがこの攻撃によってノックアウトされた場合、カブトップからすべての特別な条件と7つのダメージカウンターを削除します（すべてが7未満の場合はすべて）。",
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "雷鳴",
			},
			effect: {
				'ja-jp': "カブトップスに取り付けられた各稲妻エネルギーに対して、40のダメージと10ダメージをさらに10ダメージします。",
			},
		},
	],

	retreat: 1,

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
