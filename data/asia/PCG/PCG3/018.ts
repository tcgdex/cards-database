import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "猟犬",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [228],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ダークリフト",
			},
			effect: {
				'ja-jp': "Houndourに暗闇のエネルギーが付着している場合、Houndourのリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Fire"],
			name: {
				'ja-jp': "火の猛烈な",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
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
