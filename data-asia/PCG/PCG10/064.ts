import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "レイロン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [305],
	hp: 70,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "花崗岩の頭",
			},
			effect: {
				ja: "対戦相手の次のターン中に、攻撃によるライロンに与えられた損害は10増加します（脱力感と抵抗を適用した後）。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "踏みつけ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。",
			},
		},
	],

	retreat: 2,

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
