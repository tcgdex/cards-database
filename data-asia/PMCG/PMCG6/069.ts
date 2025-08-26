import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ブレインのカンガスハン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [115],
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "子供のパンチ",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ワンツーパンチ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は30のダメージに加えて10ダメージを与えます。尾の場合、この攻撃は30のダメージを与えます。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
