import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レイカザ（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [384.1],
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "デルタガード",
			},
			effect: {
				'ja-jp': "Rayquazaにホロンエネルギーカードが付いている限り、Rayquazaの稲妻攻撃の効果を無視してください。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'ja-jp': "パワーブロー",
			},
			effect: {
				'ja-jp': "Rayquazaに取り付けられたエネルギーの量を10回損傷します。",
			},
		},
		{
			cost: ["Lightning", "Metal", "Colorless", "Colorless"],
			name: {
				'ja-jp': "稲妻",
			},
			effect: {
				'ja-jp': "Rayquazaに7つのダメージカウンターを入れます。",
			},
			damage: 70,
		},
	],

	retreat: 3,

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
