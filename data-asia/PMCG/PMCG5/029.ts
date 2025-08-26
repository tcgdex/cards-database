import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "MistyのPoliWhirl",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [61],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "急流",
			},
			effect: {
				ja: "防衛ポケモンにエネルギーカードが付いている場合は、コインをひっくり返します。頭の場合は、それらのエネルギーカードの1つを選択して廃棄します。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ウォーターパンチ",
			},
			effect: {
				ja: "MistyのPoliWhirlに取り付けられた水エネルギーの数に等しい多数のコインをひっくり返します。この攻撃は、30のダメージとヘッドごとに10ダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
