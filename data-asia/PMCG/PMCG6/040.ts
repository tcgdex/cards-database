import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ジョバンニのジャラドス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "嵐を召喚します",
			},
			effect: {
				ja: "2つのコインをフリップします。両方がヘッドである場合、この攻撃はお互いのポケモン（あなた自身でさえ）に20のダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。",
			},
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "ドラゴン・トルネード",
			},
			effect: {
				ja: "この攻撃が防御ポケモンをノックアウトしない限り、対戦相手のベンチ付きポケモンを1つ選択し、防御ポケモンに切り替えます。",
			},
			damage: 40,
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
