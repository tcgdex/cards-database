import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "コルサラ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [222],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "回復する",
			},
			effect: {
				ja: "Corsolaに取り付けられた1つの水エネルギーカードを廃棄すると、この攻撃は何もしません。 Corsolaからすべてのダメージカウンターを削除します。",
			},
		},
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "スパイクキャノン",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
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
