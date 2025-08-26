import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "グランブル",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [210],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "荒れ狂う料金",
			},
			effect: {
				ja: "この攻撃は、Granbullの各ダメージカウンターに対して10ダメージと10ダメージを与えます。その後、Granbullはそれ自体に20のダメージを与えます。",
			},
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
