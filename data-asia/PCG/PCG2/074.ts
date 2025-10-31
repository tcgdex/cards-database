import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "スカルモリー",
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
				ja: "メタリックリフト",
			},
			effect: {
				ja: "Skarmoryに金属エネルギーが付着している場合、Skarmoryのリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スピアヘッド",
			},
			effect: {
				ja: "カードを描きます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "重金属",
			},
			effect: {
				ja: "スカルモリーに取り付けられた金属エネルギーごとにコインを裏返します。この攻撃は、10ダメージに加えて、ヘッドごとに20のダメージを与えます。",
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
