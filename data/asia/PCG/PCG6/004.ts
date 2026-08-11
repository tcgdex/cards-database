import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴルバット",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [42],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "スーパーポイズンブレス",
			},
			effect: {
				'ja-jp': "それぞれの防御ポケモンは現在中毒になっています。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "ソニック信号",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンの2つを選択してください。この攻撃は、それぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 1,

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
