import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "軽いフレアロン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [136],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "準備し始める",
			},
			effect: {
				ja: "ベンチ付きポケモンがある場合は、デッキをファイアエネルギーカードに検索し、1つに取り付けます。次に、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "燃えている炎",
			},
			effect: {
				ja: "2つのコインをフリップします。それぞれの頭について、軽いフレレオンに取り付けられた火災エネルギーカードを捨てるか、この攻撃は何もしません。この攻撃は、30のダメージとヘッドごとに20のダメージを与えます。",
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
