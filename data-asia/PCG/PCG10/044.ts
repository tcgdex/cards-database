import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "マチョーク",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [67],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "安定したパンチ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。",
			},
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "メガキック",
			},
			damage: 50,
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
