import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴーレム",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [76],
	hp: 120,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "修理",
			},
			effect: {
				'ja-jp': "ファイティングエネルギーカードを廃棄することを検索し、ゴーレムに添付してください。そうする場合は、Golemから2つのダメージカウンターを削除します。",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "激怒した線形攻撃",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンを1つ選択します。この攻撃は、ゴーレムの各ダメージカウンターでそのポケモンに対して10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "岩の転倒",
			},
			effect: {
				'ja-jp': "この攻撃の損傷は抵抗の影響を受けません。",
			},
			damage: 70,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
