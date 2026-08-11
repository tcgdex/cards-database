import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "暗いforretress",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [205],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "アーマーアップ",
			},
			effect: {
				'ja-jp': "次のターンの終わりまで、攻撃によるダメージによって暗いfortretressがノックアウトされる場合、コインをひっくり返します。ヘッドの場合、暗いfortretressはノックアウトされず、その残りのHPは代わりに10になります。",
			},
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				'ja-jp': "爆発",
			},
			effect: {
				'ja-jp': "Dark Forretressは、それ自体に60のダメージを与えます。",
			},
			damage: 60,
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
