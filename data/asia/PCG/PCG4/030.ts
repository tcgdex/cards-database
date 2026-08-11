import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オクリリー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [224],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "スーパー吸引カップ",
			},
			effect: {
				'ja-jp': "オクタイラがあなたのアクティブなポカモンである限り、あなたの相手のポカモンは退却することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "立っている",
			},
			effect: {
				'ja-jp': "オクリリーに取り付けられたエネルギーカードを廃棄します。次のターン中に、八典のパルスブラスト攻撃のベースダメージは120です。",
			},
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				'ja-jp': "パルスブラスト",
			},
			damage: 30,
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
