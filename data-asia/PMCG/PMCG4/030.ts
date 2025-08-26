import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークマグネトン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [82],
	hp: 60,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "Sonicboom",
			},
			effect: {
				ja: "この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning"],
			name: {
				ja: "磁気線",
			},
			effect: {
				ja: "防御するポケモンに基本的なエネルギーカードが付属している場合は、そのうちの1つを選択します。対戦相手がベンチポケモンを持っている場合は、それらの1つを選択して、そのエネルギーカードを添付します。",
			},
			damage: 30,
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
