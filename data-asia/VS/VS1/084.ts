import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ブルーノのスチールス",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [208],
	hp: 80,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ヘッドバット",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "ロックスマッシュ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
			},
		},
	],

	retreat: 4,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
		},
	],
};

export default card
