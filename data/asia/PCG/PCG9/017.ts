import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "togetic（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [176],
	hp: 60,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "デルタコピー",
			},
			effect: {
				'ja-jp': "カードにDがある相手のポケモンの1つの攻撃を選択します。デルタは、エネルギーコストを除いて、その攻撃をコピーします。 （その攻撃に必要な他のことをまだしなければなりません。）Togeticはその攻撃を実行します。",
			},
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				'ja-jp': "波のスプラッシュ",
			},
			damage: 30,
		},
	],


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
