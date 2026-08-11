import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヌズリーフ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [274],
	hp: 80,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "自己充電",
			},
			effect: {
				'ja-jp': "あなたの手からヌズリーフに暗闇のエネルギーカードを取り付けます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "コークスクリューパンチ",
			},
			damage: 40,
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
