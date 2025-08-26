import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いオマニテ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [138],
	hp: 40,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "ウォーターキャノン",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、ダークオマニテに取り付けられた各水エネルギーカードに対して10ダメージを与えます。衰弱と抵抗を適用しないでください。この方法で30以上のダメージを与えることはできません。",
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
