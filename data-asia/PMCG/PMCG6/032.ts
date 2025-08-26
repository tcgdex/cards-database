import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ブレインのカリザード",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [6],
	hp: 100,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "炎を鳴らします",
			},
			effect: {
				ja: "ブレインのカリザードに取り付けられたすべてのファイアエネルギーカードを捨ててください。 BlaineのCharizardに取り付けられたすべてのエネルギーカードが2つの火エネルギーを提供する場合、それらすべてを捨ててください。この攻撃は、この方法で廃棄された各火災エネルギーに対して20のダメージと20のダメージをもたらします。",
			},
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "炎ジェット",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに40のダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
