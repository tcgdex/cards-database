import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "Shiftry Ex",
	},


	category: "Pokemon",
	dexId: [275],
	hp: 140,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				ja: "スキルハック",
			},
			effect: {
				ja: "対戦相手の手を見て、そこにある基本的なポケモンまたは進化カードを選択してください。そのポケモンの攻撃の1つを選択してください。スキルハックは、エネルギーコストを除いて攻撃するコピーをコピーします。 （あなたはまだその攻撃に必要な他のことをしなければなりません。）（そのポケモンがどんなタイプであっても、シフトリー・エックスのタイプはまだ暗闇です。）シフトリー・エクスはその攻撃を実行します。",
			},
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				ja: "ダージ",
			},
			effect: {
				ja: "防御ポケモンと同じ名前を持つ相手のベンチ付きポケモンのそれぞれに60のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 60,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
