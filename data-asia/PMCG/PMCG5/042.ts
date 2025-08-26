import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "Surge's Jolteon中t",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [135],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "高電圧",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、対戦相手は次のターン中にトレーナーカードをプレイできません。",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				ja: "サンダーフレア",
			},
			effect: {
				ja: "30のダメージと10ダメージの数のダメージ数は、SurgeのJolteon中tのカウンターを行い、コインをひっくり返します。テールの場合、SurgeのJolteon中tはそれ自体に30のダメージを与えます。",
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
