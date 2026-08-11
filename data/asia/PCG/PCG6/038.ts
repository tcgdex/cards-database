import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジョルテオン（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [135],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "デルタ検索",
			},
			effect: {
				'ja-jp': "デッキを検索してホロンエネルギーカードを調べ、ジョルテオンに添付してください。その後、デッキをシャッフルします。",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Metal", "Colorless"],
			name: {
				'ja-jp': "スパークを返します",
			},
			effect: {
				'ja-jp': "Jolteonに取り付けられたエネルギーカードを手に返すことができます。もしそうなら、この攻撃は、相手のベンチ付きポケモンの1つに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
