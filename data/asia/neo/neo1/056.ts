import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スニーエル",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [215],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "フューリースワイプ",
			},
			effect: {
				'ja-jp': "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Darkness", "Darkness"],
			name: {
				'ja-jp': "beatります",
			},
			effect: {
				'ja-jp': "プレイ中のポケモンごとにコインをひっくり返します（これを含む）。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
