import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スカルモリー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [227],
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ダブルペック",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: {
				'ja-jp': "スピニングヘッド",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、ベンチ付きポケモンを1枚スカルモリーします。",
			},
			damage: 30,
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
