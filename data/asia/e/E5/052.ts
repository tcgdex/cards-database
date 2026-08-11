import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マチャンプ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [68],
	hp: 120,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "免疫",
			},
			effect: {
				'ja-jp': "マチャンプに対する相手の攻撃のすべての影響を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "ドラッグします",
			},
			effect: {
				'ja-jp': "ダメージを与える前に、相手がベンチポケモンを持っている場合は、それらの1つを選択し、防御ポケモンで切り替えます。相手がベンチポケモンを持っていない場合は、この効果を無視してください。",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ハリケーンパンチ",
			},
			effect: {
				'ja-jp': "4コインをひっくり返します。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",

		},
		{
			type: "normal",
			stamp: ["1st Edition"],
		},
	],
};

export default card
