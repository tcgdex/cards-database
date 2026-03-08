import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "マグナイト-072/092",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [81],
	hp: 40,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Metal"],
			name: {
				ja: "引きつける",
			},
			effect: {
				ja: "対戦相手のベンチ付きポケモンの1つを選択し、防御ポケモンをそれで切り替えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
