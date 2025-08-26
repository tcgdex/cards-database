import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ジョバンニのマジカルプ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [129],
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "先祖の記憶",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。いずれにせよ、ジョヴァンニのマジカルプが遊んでいる限り、この攻撃を再び使用することはできません（ジョバンニのマジカルプをベンチに置くことさえ、再び使用することはできません）。",
			},
			damage: 40,
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "周りを燃やします",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
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
