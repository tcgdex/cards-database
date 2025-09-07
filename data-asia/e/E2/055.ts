import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "タイログ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [236],
	hp: 30,
	types: ["Fighting"],
	stage: "Baby",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "エネルギーパンチ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられた特別なエネルギーカードを捨ててください。尾の場合、この攻撃は何もしません。",
			},
			damage: 10,
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
