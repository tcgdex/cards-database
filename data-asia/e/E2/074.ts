import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "マグネトン-074/092",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [82],
	hp: 70,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "磁気流",
			},
			effect: {
				ja: "ターン中に（攻撃の前）</em> </em>、マグネトンがアクティブなポクモンの場合、コインをひっくり返すことができます。頭の場合は、エネルギーカードが付いている2つの対戦相手のPokmonを選択します。それらの各ポクモンに添付されたエネルギーカードの1つを選択し、ポクモン間に切り替えます。マグネトンが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "鋼波",
			},
			effect: {
				ja: "この攻撃は、防御ポケモンと同じタイプ（色）である相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
