import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "ニドリーナ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [30],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "傷",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "高速進化",
			},
			effect: {
				ja: "デッキを最大2枚の進化カードで検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
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
