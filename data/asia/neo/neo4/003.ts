import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サンカーン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [191],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ロールアウトする",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				'ja-jp': "日光浴",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。ヘッドの場合、Sunkernからすべてのダメージカウンターを削除します。サンカーンから進化するカードをデッキに検索し、そのカードをサンカーンに添付してください。これは進化するサンカーンとしてカウントされます。その後、デッキをシャッフルします。",
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
