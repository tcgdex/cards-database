import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "Tentacool",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [72],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "自由floating",
			},
			effect: {
				ja: "Tentacoolにエネルギーが付着していない場合、Tentacoolのリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "包む",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
		},
	],

	retreat: 1,

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
