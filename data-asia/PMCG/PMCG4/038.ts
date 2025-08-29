import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ディグレット",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [50],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "下を掘ります",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "傷",
			},
			damage: 20,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
