import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "onix",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [95],
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ホーンラッシュ",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "花崗岩の頭",
			},
			effect: {
				ja: "対戦相手の次のターン中に、攻撃によってOnixに与えられた損害は10増加します（脱力感と抵抗を適用した後）。",
			},
			damage: 20,
		},
	],

	retreat: 3,

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
