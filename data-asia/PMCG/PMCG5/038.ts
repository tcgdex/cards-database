import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "Surge's Voltorb中t",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [100],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "スピンボール",
			},
			effect: {
				ja: "フリップ1コイン。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "ダブルスピン",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
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
