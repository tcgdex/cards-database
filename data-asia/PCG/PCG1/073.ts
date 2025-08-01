import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [137],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "データ取得",
			},
			effect: {
				ja: "手に4枚未満のカードがある場合は、手に4枚のカードがあるまでカードを描画します。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "レイを混乱させます",
			},
			effect: {
				ja: "防御ポケモンは今混乱しています。",
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
