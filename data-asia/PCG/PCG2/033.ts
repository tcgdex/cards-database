import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "Manectric Ex",
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
				ja: "切断します",
			},
			effect: {
				ja: "対戦相手は、対戦相手の次のターン中に手からトレーナーカード（サポーターカードを除く）をプレイできません。",
			},
			damage: 40,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				ja: "メガショット",
			},
			effect: {
				ja: "Manectric Exに取り付けられたすべての稲妻エネルギーを捨ててから、対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに80のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
