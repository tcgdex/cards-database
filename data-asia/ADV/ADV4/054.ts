import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "メディチャム",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [308],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "瞑想します",
			},
			effect: {
				ja: "ディフェンディングポケモンの各ダメージカウンターで20のダメージと10ダメージがさらに10件のダメージを与えます。",
			},
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "チャクラポイント",
			},
			effect: {
				ja: "対戦相手の手の各カードに対して、10のダメージと10ダメージがさらに10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
