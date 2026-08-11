import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ルナトン",
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
				ja: "ムーンロー",
			},
			effect: {
				ja: "プレイ中の各ソロロックのリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "先見性",
			},
			effect: {
				ja: "いずれかのプレーヤーのデッキのトップ5カードを見て、そのプレイヤーのデッキの上に戻します。",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "ターゲットビーム",
			},
			effect: {
				ja: "20のダメージに加えて、プレイ中のソロロックごとにさらに10ダメージを与えます。",
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
