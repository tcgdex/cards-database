import { Card } from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "ho-oh",
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [250],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "クリスタルタイプ",
			},
			effect: {
				ja: "火、水、または稲妻の基本エネルギーカードを手からho-ohに取り付けると、ho-ohのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Lightning"],
			name: {
				ja: "聖なる炎",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Water", "Water", "Colorless"],
			name: {
				ja: "蒸気を乱す",
			},
			effect: {
				ja: "Ho-Ohに取り付けられたエネルギーカードを廃棄し、コインをひっくり返します。  頭の場合、防御するポケモンが燃やされます。",
			},
			damage: 40,
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
