import { Card } from "../../../interfaces"
import Set from "../PMCG1"
import InternationCard from "../../../data/Base/Base Set/20.ts";

const card: Card = {
	set: Set,
	name: {
		ja: "電極",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [101],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "バツァップ",
			},
			effect: {
				ja: "ターン中に一度、このポクモンをノックアウトし、特別なエネルギーカードとして他のポクモンの1つにそれを取り付けることができます。このカードはポクモンに取り付けられていますが、あらゆる種類のエネルギーを提供しますが、一度に2つのエネルギーしか提供しません。このポクモンが眠っている、混乱し、麻痺している場合、このポクモンの力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				ja: "サンダージョルト",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、このポケモンはそれ自体に10ダメージを与えます。",
			},
			damage: 50,
		},
	],

	retreat: 1,

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
