import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "サブリナのジェンガー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [94],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "痛みアンプ",
			},
			effect: {
				ja: "対戦相手のポケモンのそれぞれにダメージカウンターを置いてください。",
			},
		},
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: {
				ja: "夜の呼び出し",
			},
			effect: {
				ja: "この攻撃が防御ポケモンをノックアウトしない限り、2コインをひっくり返します。両方がヘッドである場合、対戦相手は彼または彼女のアクティブなポケモンとそれに取り付けられたすべてのカードを彼または彼女のデッキにシャッフルします。",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
