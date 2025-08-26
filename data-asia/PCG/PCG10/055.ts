import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "ヌズリーフ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [274],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "偽物",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				ja: "穏やかな平手打ち",
			},
			damage: 40,
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
