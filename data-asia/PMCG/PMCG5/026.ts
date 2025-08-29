import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ミスティのゴールデン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [118],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "怒り攻撃",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Water"],
			name: {
				ja: "超音速",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
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
