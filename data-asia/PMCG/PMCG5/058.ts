import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのジグリプフ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [39],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "グループ療法",
			},
			effect: {
				ja: "あなたとあなたの対戦相手は、それぞれのポケモンのそれぞれから1つのダメージカウンターを削除します。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "引っ張られたパンチ",
			},
			effect: {
				ja: "防御するポケモンにダメージカウンターがない場合、この攻撃は40のダメージを与えます。ダメージがある場合、この攻撃は10ダメージを与えます。",
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
