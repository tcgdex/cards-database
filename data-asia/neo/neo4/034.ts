import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "軽いvaporeon",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [134],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "洗い流します",
			},
			effect: {
				ja: "ベンチ付きポケモンがある場合は、コインをひっくり返します。ヘッドの場合は、ベンチ付きポケモンの1つからすべてのダメージカウンターを取り外し、それに取り付けられたすべてのエネルギーカードを破棄します。",
			},
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "催眠術",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。ダメージカウンターを使用して、各ベンチポケモン（あなたと相手）から1つのダメージカウンターを取り外します。",
			},
			damage: 30,
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
