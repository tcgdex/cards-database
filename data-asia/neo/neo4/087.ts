import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラチーニ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [147],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "小屋",
			},
			effect: {
				ja: "Dratiniから1つのダメージカウンターを取り外します。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				ja: "怒り攻撃",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
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
