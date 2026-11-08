import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルナトン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [337],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ムーンロー",
			},
			effect: {
				'ja-jp': "プレイ中の各ソロロックのリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "先見性",
			},
			effect: {
				'ja-jp': "いずれかのプレーヤーのデッキのトップ5カードを見て、そのプレイヤーのデッキの上に戻します。",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "ターゲットビーム",
			},
			effect: {
				'ja-jp': "20のダメージに加えて、プレイ中のソロロックごとにさらに10ダメージを与えます。",
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
