import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "カブト",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [140],
	hp: 30,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "カブトの鎧",
			},
			effect: {
				ja: "攻撃が<em>（あなた自身でさえ）</em>がカブト<em>に損傷を与えるとき（脱力と抵抗を適用した後）</em>、その攻撃はカブトへのダメージの半分しかありません（最も近い10に丸められます）。 <em>（攻撃の他の効果はまだ発生します。）</em>このパワーは機能しなくなり、カブトは特別な状態の影響を受けます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "傷",
			},
			damage: 10,
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
