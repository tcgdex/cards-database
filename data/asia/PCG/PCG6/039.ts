import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドラゴナイト（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [149],
	hp: 100,
	types: ["Lightning"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "デルタ料金",
			},
			effect: {
				'ja-jp': "ターン中に（攻撃の前に）、廃棄の山からベンチポカモンに1枚の稲妻エネルギーカードを取り付けることができます。ドラゴナイトが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'ja-jp': "敏ility性",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、対戦相手の次のターン中にドラゴナイトに行われたダメージを含む攻撃のすべての影響を防ぎます。",
			},
			damage: 30,
		},
		{
			cost: ["Lightning", "Metal", "Colorless", "Colorless"],
			name: {
				'ja-jp': "重い衝撃",
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
