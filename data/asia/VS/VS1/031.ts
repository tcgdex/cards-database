import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャスミンのアンファロス",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [181],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				'ja-jp': "サンダーパンチ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。尾の場合、ジャスミンのアンファロスはそれ自体に20のダメージを与えます。",
			},
		},
	],

	retreat: 2,

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
