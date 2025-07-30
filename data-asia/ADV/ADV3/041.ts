import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "フライゴン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [330],
	hp: 120,
	types: ["Colorless"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass", "Lightning"],
			name: {
				ja: "エネルギーシャワー",
			},
			effect: {
				ja: "あなたが好きな方法であなたの手からあなたの手からあなたの手からあなたの手から任意の数の基本的なエネルギーカードを添付します。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "レインボーバーン",
			},
			effect: {
				ja: "Flygonに取り付けられた基本エネルギーカードごとに30のダメージと10ダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};
