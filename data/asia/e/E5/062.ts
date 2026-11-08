import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Snorlax",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [143],
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "むかつり",
			},
			effect: {
				'ja-jp': "ターン中（攻撃前）に、SnorlaxがアクティブなPokmonである場合、Snorlaxから1ダメージカウンターを削除できます。 Snorlaxは今眠っています。 Snorlaxが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "連続的なタンブル",
			},
			effect: {
				'ja-jp': "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},
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
			stamp: ["1st Edition"],
		},
	],
};

export default card
