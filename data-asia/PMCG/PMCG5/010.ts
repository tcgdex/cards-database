import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのベルスプラウト（lv.13）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [69],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "浸る",
			},
			effect: {
				ja: "ターン中（攻撃の前）</em> </em>、他のPokmonに最大2匹の草エネルギーカードを取り付けて、エリカのベルスプラウトに取り付けることができます。エリカのベルスプラウトが眠っている、混乱し、麻痺している場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "ブドウをストレッチします",
			},
			effect: {
				ja: "対戦相手のベンチポケモンの1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
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
