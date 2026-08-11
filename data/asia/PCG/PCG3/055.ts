import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "Furret",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [162],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "素早い変更",
			},
			effect: {
				ja: "手に最大3枚のカードを選択し、デッキの上に置きます。次に、デッキをその多くのカードを検索し、手に入れてください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "クイックテールスマッシュ",
			},
			effect: {
				ja: "ダメージを与える前に、コインをひっくり返すことができます。頭の場合、この攻撃は代わりに80のダメージを与えます。尾の場合、この攻撃は何もしません。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
