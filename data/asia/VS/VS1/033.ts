import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チャックの入門",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [57],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "傷",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "レイジキック",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は20のダメージに加えて、チャックのプライムエーパーの各ダメージカウンターでさらに10ダメージを与えます。",
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
