import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "猟犬",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [229],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				'ja-jp': "暗い炎",
			},
			effect: {
				'ja-jp': "ハウズームに取り付けられた1つの消防剤カードを捨てたり、この攻撃は何もしません。廃棄パイルに闇のエネルギーカードがある場合は、それらの1つをハウンドームに取り付けます。",
			},
			damage: 20,
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				'ja-jp': "黒い牙",
			},
			effect: {
				'ja-jp': "猟犬に取り付けられた暗闇のエネルギーの数に等しい多数のコインをひっくり返します。この攻撃は、30のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
