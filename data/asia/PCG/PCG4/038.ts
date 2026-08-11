import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Elekid",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [239],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "赤ちゃんの進化",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前に）ターン中に、ElectabuzzをElekid（これは進化するElekidとしてカウント）にElectabuzzを置き、Elekidからすべてのダメージカウンターを削除できます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "磁気旅行",
			},
			effect: {
				'ja-jp': "低圧システムが機能している場合、防御ポケモンは混乱しています。",
			},
			damage: 10,
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
