import { Card } from "../../../interfaces"
import Set from "../PMCG1"
import InternationCard from "../../../data/Base/Base Set/31.ts";

const card: Card = {
	set: Set,
	name: {
		ja: "ジンクス",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [124],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "doubleslap",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},

		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				ja: "瞑想します",
			},
			effect: {
				ja: "ディフェンディングポケモンの各ダメージカウンターで20のダメージと10ダメージがさらに10件のダメージを与えます。",
			},

		},
	],

	retreat: 2,

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
