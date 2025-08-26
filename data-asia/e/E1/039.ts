import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "フラフィー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [180],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ヘッドバット",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				ja: "サンダージョルト",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、Flaaffyはそれ自体に20のダメージを与えます。",
			},
			damage: 50,
		},
	],

	retreat: 1,

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
