import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Igglybuff",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [174],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ホバーリフト",
			},
			effect: {
				'ja-jp': "Jigglypuff、Wigglytuff、Wigglytuff ex、およびIgglybuffを支払います。ターン中（攻撃の前に）一度、Jigglypuffを手からIgglybuff（これは進化するIgglybuffとしてカウント）に入れ、Igglybuffからすべてのダメージカウンターを削除することができます。",
			},
		}],

	attacks: [],

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
