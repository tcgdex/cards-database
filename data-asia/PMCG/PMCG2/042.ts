import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "タウロス",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [128],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "踏みつけ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
			},

		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "大暴れ",
			},
			effect: {
				ja: "タウロスのダメージカウンターごとに20のダメージに加えて10ダメージを加えます。コインをひっくり返します。尾の場合、タウロスは（ダメージを与えた後）混乱しています。",
			},

		},
	],

	retreat: 2,

	variants : [
		{
			type: "normal",
		},
	],
};

export default card
