import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "バゴン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [371],
	hp: 50,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "麻痺する視線",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "燃焼",
			},
			damage: 20,
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
