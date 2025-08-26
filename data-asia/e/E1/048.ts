import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラゴンエア",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [148],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Water"],
			name: {
				ja: "スパイラルウェーブ",
			},
			effect: {
				ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
