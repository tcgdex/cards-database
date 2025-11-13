import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "ファンピー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [231],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "フレイル",
			},
			effect: {
				ja: "この攻撃は、Phanpyのダメージ数の数の10回のダメージを与えます。",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "ロールアウトする",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
