import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "meowth",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [52],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "コインハール",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択し、コインをひっくり返します。頭の場合、この攻撃はそのポケモンに20のダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
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
