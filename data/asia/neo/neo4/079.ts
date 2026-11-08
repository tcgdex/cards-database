import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダークタイラナター",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [248],
	hp: 90,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'ja-jp': "マウンテンスマッシャー",
			},
			effect: {
				'ja-jp': "ダークティラニタルに取り付けられたファイティングエネルギーカードの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。次に、ヘッドごとに、対戦相手のデッキから一番上のカードを捨てます。",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			name: {
				'ja-jp': "逃げ出します",
			},
			effect: {
				'ja-jp': "相手がベンチポケモンを持っている場合、この攻撃は50ではなく30のダメージを与え、それらのベンチポケモンの1つを選択します。この攻撃は、そのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 50,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
