import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ラッタタ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [19],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "トリック",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、デッキのトップカードで賞品を1つ切り替えることができます。ラッタタが眠っている、混乱し、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "クイック攻撃",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
