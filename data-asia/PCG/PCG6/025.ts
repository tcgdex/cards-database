import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "スローキング",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [199],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "賞シフト",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）、手からカードを選択して、賞品カードを表面に置くことができます。そうした場合は、見ずに顔を下ろした賞品を1枚選択して、手に入れてください。スローキングが特別な状態の影響を受けている場合、またはすべての賞品が表面している場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "サイキックオプション",
			},
			effect: {
				ja: "スローキングに水エネルギーカードが付いている場合、この攻撃は20ダメージに加えて20ダメージを与えます。 Slowkingにサイキックエネルギーカードが付いている場合は、防御ポケモンに取り付けられた特別なエネルギーカードを捨ててください。",
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
