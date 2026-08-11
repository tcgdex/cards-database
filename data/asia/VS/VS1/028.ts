import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャスミンのマグネトン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [82],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ソニックブーム",
			},
			effect: {
				'ja-jp': "この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
