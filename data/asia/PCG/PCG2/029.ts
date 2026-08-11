import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ペリッパー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [279],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ベイダンス",
			},
			effect: {
				'ja-jp': "次のターン中に、現在のアクティブなポケモンのいずれかが防御するポケモンにダメージを与えた場合、攻撃は30件のダメージを与えます（脱力感と抵抗を適用する前に）。",
			},
			damage: 10,
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
