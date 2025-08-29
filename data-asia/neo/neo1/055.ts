import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "マークロウ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [198],
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				ja: "平均的な外観",
			},
			effect: {
				ja: "Murkrowがあなたのアクティブなポケモンのままである限り、防御ポケモンは退却することはできません。 （どちらかのポケモンがこの効果を終了するか、ベンチまたは進化します。）",
			},
		},
		{
			cost: ["Darkness", "Colorless"],
			name: {
				ja: "FEINT攻撃",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。この攻撃の損傷は、衰弱、抵抗、ポケモンの力、または防御ポケモンに対するその他の影響の影響を受けません。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
