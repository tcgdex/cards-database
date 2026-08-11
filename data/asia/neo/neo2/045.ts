import { Card } from "models/database/card"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Scizor",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [212],
	hp: 80,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Metal"],
			name: {
				'ja-jp': "誤ったスワイプ",
			},
			effect: {
				'ja-jp': "ダメージは、防御ポケモンの残りのHPの半分に等しい（最も近い10に丸められています）。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "二重爪",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は20のダメージに加えて、各ヘッドに対して20のダメージをさらに発生させます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
