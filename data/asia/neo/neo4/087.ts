import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドラチーニ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [147],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "小屋",
			},
			effect: {
				'ja-jp': "Dratiniから1つのダメージカウンターを取り外します。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "怒り攻撃",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
