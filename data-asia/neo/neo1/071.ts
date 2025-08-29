import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "togetic",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [176],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スーパーメトロノーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、対戦相手のポケモンの1匹の攻撃を選択します。スーパーメトロノームは、エネルギーコストを除いてその攻撃をコピーします。 （その攻撃を使用するには、他のことをしなければなりません。）（防御ポケモンがどんなタイプであっても、Togeticのタイプはまだ無色です。）Togeticはその攻撃を実行します。 （Togeticは、攻撃を行うために必要な適切な数のタイプのエネルギーが付着していなくても、その攻撃を行うことができます。）",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "飛ぶ",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ダメージを含む攻撃のすべての影響を防止します。尾の場合、この攻撃は何もしません（ダメージさえありません）。",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "holo",
		},
	],
};

export default card
