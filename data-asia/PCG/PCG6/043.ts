import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "レイカザ（デルタ種）",
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
				ja: "デルタガード",
			},
			effect: {
				ja: "Rayquazaにホロンエネルギーカードが付いている限り、Rayquazaの稲妻攻撃の効果を無視してください。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "パワーブロー",
			},
			effect: {
				ja: "Rayquazaに取り付けられたエネルギーの量を10回損傷します。",
			},
		},
		{
			cost: ["Lightning", "Metal", "Colorless", "Colorless"],
			name: {
				ja: "稲妻",
			},
			effect: {
				ja: "Rayquazaに7つのダメージカウンターを入れます。",
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
