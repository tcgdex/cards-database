import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "スウラー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [277],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "急なダイビング",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、対戦相手の次のターン中にスウェローに行われたダメージを含む攻撃のすべての影響を防ぎます。テールの場合、次のターン中に、スウェローのグライド攻撃のベースダメージは100です。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "グライド",
			},
			damage: 40,
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
