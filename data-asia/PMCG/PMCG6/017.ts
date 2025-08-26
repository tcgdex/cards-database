import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカの金星",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [3],
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "成長",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、あなたの手からエリカの金星に最大2匹の草のエネルギーカードを取り付けることができます。",
			},
		},
		{
			cost: ["Grass", "Grass", "Grass", "Grass"],
			name: {
				ja: "広い太陽光",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合は、2つのポケモンを選択します（または、1つしかない場合は1つ）。この攻撃は、それぞれに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
