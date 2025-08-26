import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "奇妙な",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [43],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "隠れる",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ダメージを含む攻撃のすべての影響がオッディッシュに行われます。",
			},
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "吸収する",
			},
			effect: {
				ja: "防御ポケモンに行われたダメージの半分に等しいOddishから多数のダメージカウンターを削除します（衰弱と抵抗を適用した後）（最も近い10に丸められます）。 Oddishのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
