import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "sableye",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [302],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ナイトビジョン",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前に）一度、SableyeがあなたのアクティブなPokã©Monである場合、あなたはあなたの対戦相手の手を見ることができます。 Sableyeが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "スラッシュ",
			},
			damage: 10,
		},
		{
			cost: ["Darkness"],
			name: {
				'ja-jp': "制限",
			},
			effect: {
				'ja-jp': "対戦相手は、相手の次のターン中に自分の手からサポーターカードをプレイできません。",
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
