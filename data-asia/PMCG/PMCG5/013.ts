import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのexeggutor",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [103],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "サイキック交換",
			},
			effect: {
				ja: "デッキに手をシャッフルしてから、5枚のカードを描きます。",
			},
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "踏みつけ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は30のダメージに加えて10ダメージを与えます。尾の場合、この攻撃は30のダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
