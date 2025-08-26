import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "マンキー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [56],
	hp: 30,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "ピーク",
			},
			effect: {
				ja: "順番<em>（攻撃の前）</em>の間に、次のいずれかを見ることができます。どちらかのプレイヤーのデッキのトップカード、対戦相手の手からのランダムカード、またはプレイヤーの賞品の1つです。マンキーが眠ったり、混乱したり、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "傷",
			},
			damage: 10,
		},
	],


	variants : [
		{
			type: "normal",
		},
	],
};

export default card
