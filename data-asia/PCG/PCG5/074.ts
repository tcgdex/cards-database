import { Card } from "../../../interfaces"
import Set from "../PCG5"

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
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "休む",
			},
			effect: {
				ja: "Laironからすべての特別な条件と5つのダメージカウンター（5つ未満の場合はすべて）を削除します。ライロンは今眠っています。",
			},
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "ボディスラム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
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
