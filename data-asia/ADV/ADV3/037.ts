import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラゴンエア",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [148],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "眩しい爆発",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "癒しの波",
			},
			effect: {
				ja: "アクティブなポケモンのそれぞれから1つのダメージカウンターを取り外します。",
			},
			damage: 30,
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
