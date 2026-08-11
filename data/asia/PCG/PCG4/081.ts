import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クレファ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [173],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "赤ちゃんの進化",
			},
			effect: {
				'ja-jp': "ターン中に（攻撃の前に）、クレファリーを手からクレファに置き（これは進化するクレファとしてカウントされます）、クレファからすべてのダメージカウンターを削除することができます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "eeeeeeek",
			},
			effect: {
				'ja-jp': "手をデッキにシャッフルしてから、6枚のカードを描きます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
