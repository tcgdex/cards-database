import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "マグネトン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [82],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "磁場",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度（攻撃の前）、廃棄パイルに基本的なエネルギーカードがある場合は、手から1枚のカードを捨てることができます。次に、廃棄パイルから最大2つの基本エネルギーカードを検索し、相手に見せて、手に入れます。この方法で最初に手に捨てたカードを返すことはできません。  マグネトンが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "磁力",
			},
			effect: {
				ja: "すべてのポケモン（マグネトンを含む）に取り付けられたエネルギーの量を10回損傷します。",
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
