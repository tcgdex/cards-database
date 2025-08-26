import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークマグカルゴ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [219],
	hp: 60,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "ホットプレート",
			},
			effect: {
				ja: "ダークマグカルゴがアクティブなポッコンである限り、プレーヤーがベビーポクモンまたは基本的なポクモンを手からベンチに置くたびに、このパワーはそのポクモンに10ダメージを与えます。 <em>（弱さと抵抗を適用しないでください。）</em>このパワーは機能しなくなり、暗いマグカルゴが眠っている、混乱し、麻痺しています。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "炎のボール",
			},
			effect: {
				ja: "この攻撃を使用すると、Dark Magcargoに取り付けられたファイアエネルギーカードを捨てることができます。そうであり、相手がベンチでポケモンを持っている場合は、そのうち1つを選択すると、この攻撃は20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 20,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
