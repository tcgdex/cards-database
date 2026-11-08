import { Card } from "models/database/card"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Omastar",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [139],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "絞る",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与え、防御ポケモンが麻痺しています。尾の場合、この攻撃は10ダメージを与えます。",
			},
		},
		{
			cost: ["Water", "Water", "Water"],
			name: {
				'ja-jp': "スパイク弾幕",
			},
			effect: {
				'ja-jp': "Omastarに付着した水エネルギーの数に等しい多数のコインをひっくり返します。この攻撃は20のダメージに加えて、各ヘッドに対して20のダメージをさらに発生させます。",
			},
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
