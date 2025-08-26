import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いペルシャ語",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [53],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "誘惑",
			},
			effect: {
				ja: "相手がベンチ付きポケモンを持っている場合は、コインをひっくり返します。頭の場合は、対戦相手のベンチポケモンの1つを選択し、防御ポケモンで切り替えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "毒爪",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
