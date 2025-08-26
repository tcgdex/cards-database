import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "チャンジー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [113],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "doubleslap",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "卵のトス",
			},
			effect: {
				ja: "2つのコインをフリップします。どちらかが尾の場合、この攻撃は何もしません。",
			},
			damage: 80,
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
