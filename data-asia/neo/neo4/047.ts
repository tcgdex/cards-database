import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "輝くライチュ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [26],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Water", "Water"],
			name: {
				ja: "サンダースコール",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合、そのうち1つを選択してください。この攻撃は、輝くライチュに付着した各水エネルギーに対してそのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 40,
		},
	],

	retreat: 1,

};

export default card
