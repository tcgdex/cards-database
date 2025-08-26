import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "Elekid",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [239],
	hp: 30,
	types: ["Lightning"],
	stage: "Baby",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "遊び心のあるパンチ",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、相手のアクティブなポクモンに20ダメージを与えます。 <em>（衰弱と抵抗を適用します。）</em>どちらにしても、これはあなたの番です。 Elekidが眠ったり、混乱したり、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
