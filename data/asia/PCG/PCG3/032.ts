import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キングドラ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [230],
	hp: 120,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ドラゴンベール",
			},
			effect: {
				'ja-jp': "Kingdraが遊んでいる限り、それぞれのアクティブなPokã©Monには弱点はありません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "ハイパーワールプール",
			},
			effect: {
				'ja-jp': "尾がなくなるまでコインをひっくり返します。各ヘッドについて、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "アクアソニック",
			},
			effect: {
				'ja-jp': "この攻撃の損傷は、抵抗の影響を受けません。",
			},
			damage: 50,
		},
	],

	retreat: 2,

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
