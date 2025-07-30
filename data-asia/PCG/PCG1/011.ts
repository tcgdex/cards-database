import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "パラ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [46],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "家族を呼びます",
			},
			effect: {
				ja: "デッキを最大2つの基本的なポケモンを検索し、ベンチに置きます。次に、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Grass"],
			name: {
				ja: "有毒な胞子",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、相手のアクティブなポケモンが毒されます。",
			},
			damage: 10,
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
