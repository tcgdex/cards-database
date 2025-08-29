import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "コガのグリマー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [88],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "スラッジグリップ",
			},
			effect: {
				ja: "相手がベンチ付きポケモンを持っている場合は、コインをひっくり返します。頭の場合は、対戦相手のベンチポケモンの1つを選択し、防御ポケモンで切り替えます。新しい防御ポケモンは現在毒されています。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "スラッジトス",
			},
			damage: 20,
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
