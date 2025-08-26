import { Card } from "../../../interfaces"
import Set from "../neo2"

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
			cost: ["Colorless"],
			name: {
				ja: "スマッシュパンチ",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
