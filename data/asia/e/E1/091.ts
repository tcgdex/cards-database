import { Card } from "models/database/card"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "pidgeot",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [18],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "翼を鼓動します",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前に）一度、PidgeotがアクティブなPokmonである場合、ベンチで1枚のPokmonとすべてのカードをデッキに接続します。 Pidgeotが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "シャープなくちばし",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて30ダメージを与えます。",
			},
		},
	],


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
