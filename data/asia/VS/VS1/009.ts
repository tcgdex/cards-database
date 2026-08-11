import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "BugsyのBeedrill",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [15],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "怒り攻撃",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'ja-jp': "Twineedle",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},
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
