import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "種子",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [273],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ドローアップ電源",
			},
			effect: {
				'ja-jp': "デッキを検索してエネルギーカードを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "連続的なタンブル",
			},
			effect: {
				'ja-jp': "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
