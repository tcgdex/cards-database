import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "Tentacool",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [72],
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "臆病",
			},
			effect: {
				ja: "ターン<em>（攻撃の前）</em>の間はいつでも、手に触手を返すことができます。 <em>（Tentacoolに接続されたすべてのカードを捨てます。）</em>このパワーは、Tentacoolを作用させるターン、またはTentacoolが特別な状態の影響を受けている場合は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "酸",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
