import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗い染色",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [157],
	hp: 80,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "爪のスワイプ",
			},
			damage: 20,
		},
		{
			cost: ["Fire"],
			name: {
				ja: "急いで炎",
			},
			effect: {
				ja: "ポケモンに取り付けられた火災エネルギーカードを廃棄することができます。この方法で破棄された各火エネルギーカードのコインをひっくり返します。この攻撃は、ヘッド数の40回のダメージ倍になります。",
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
