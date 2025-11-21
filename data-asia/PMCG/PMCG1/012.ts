import { Card } from "../../../interfaces"
import Set from "../PMCG1"
import InternationCard from "../../../data/Base/Base Set/18.ts";

const card: Card = {
	set: Set,
	name: {
		ja: "beedrill",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [15],
	hp: 80,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "Twineedle",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},

		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "毒物",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 40,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],

	related: [
		{
			type: "translation",
			card: InternationCard
		}
	]
};

export default card
