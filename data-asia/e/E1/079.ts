import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "キングラー-079/128",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [99],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "バブル",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "巨大な爪",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 70,
		},
	],

	retreat: 2,

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
