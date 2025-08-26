import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ライトマチョーク",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [67],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "家に帰る",
			},
			effect: {
				ja: "ベンチ付きポケモンがある場合は、それらの1つをシャッフルし、すべてのカードがデッキに取り付けられています。",
			},
		},
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "穏やかなキック",
			},
			effect: {
				ja: "防御するポケモンにダメージカウンターがない場合、この攻撃は40のダメージを与えます。ある場合、この攻撃は20のダメージを与えます。",
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
