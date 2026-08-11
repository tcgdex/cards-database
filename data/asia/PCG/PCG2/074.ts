import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スカルモリー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [227],
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "メタリックリフト",
			},
			effect: {
				'ja-jp': "Skarmoryに金属エネルギーが付着している場合、Skarmoryのリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "スピアヘッド",
			},
			effect: {
				'ja-jp': "カードを描きます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "重金属",
			},
			effect: {
				'ja-jp': "スカルモリーに取り付けられた金属エネルギーごとにコインを裏返します。この攻撃は、10ダメージに加えて、ヘッドごとに20のダメージを与えます。",
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
