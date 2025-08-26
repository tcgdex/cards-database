import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "軽いデューゴン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [87],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Water"],
			name: {
				ja: "凍る息",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、防御ポケモンは今眠っています。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Water", "Water"],
			name: {
				ja: "アイスピラー",
			},
			effect: {
				ja: "ライトデューゴンがアクティブなポケモンである限り、対戦相手の次のターンの終わりまで、ベンチ付きポケモンへの攻撃によってすべての損傷を防ぎます。 （攻撃の他の影響はまだ発生しています。）",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
