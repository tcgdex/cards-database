import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "暗いアンファロ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [181],
	hp: 120,
	types: ["Lightning"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "最も暗い衝動",
			},
			effect: {
				'ja-jp': "ダークアンファロが機能している限り、相手が手から進化カードをプレイして、ポカンの1つを進化させるたびに、そのポカンに2つのダメージカウンターを置きます。最も暗いインパルスポカ - ボディごとに1ターンを使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "ラム",
			},
			damage: 30,
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ショックボルト",
			},
			effect: {
				'ja-jp': "暗いアンファロに取り付けられたすべての稲妻エネルギーを捨てます。",
			},
			damage: 70,
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
			stamp: ["1st edition"],
		},
	],
};

export default card
