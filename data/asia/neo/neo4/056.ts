import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "暗いexeggutor",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [103],
	hp: 60,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "トリプルヘッドバット",
			},
			effect: {
				'ja-jp': "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "マックスバースト",
			},
			effect: {
				'ja-jp': "相手のポケモンに取り付けられたエネルギーカードの数に等しい数のコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
