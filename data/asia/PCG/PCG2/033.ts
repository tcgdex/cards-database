import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Manectric Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [310],
	hp: 100,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'ja-jp': "切断します",
			},
			effect: {
				'ja-jp': "対戦相手は、対戦相手の次のターン中に手からトレーナーカード（サポーターカードを除く）をプレイできません。",
			},
			damage: 40,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				'ja-jp': "メガショット",
			},
			effect: {
				'ja-jp': "Manectric Exに取り付けられたすべての稲妻エネルギーを捨ててから、対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに80のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 1,

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
