import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "Farfetch'd",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [83],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "買いだめ",
			},
			effect: {
				ja: "デッキを最大2枚のポケモンツールカードで検索し、ポケモンのいずれかに添付します（ポケモンツールが既に取り付けられているポケモンを除く）。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				ja: "クロスカット",
			},
			effect: {
				ja: "防御ポケモンが進化したポケモンである場合、この攻撃は10ダメージに加えて20ダメージを与えます。",
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
