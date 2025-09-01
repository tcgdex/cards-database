import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "Shedinja",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [292],
	hp: 30,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "ワンダーガード",
			},
			effect: {
				ja: "対戦相手の進化したポカモンとポカモンエクスによってシェディンジャに行われた損害を含む攻撃のすべての影響を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ダメージの呪い",
			},
			effect: {
				ja: "1ダメージカウンターに加えて、ディフェンディングポケモンにシェディンジャの各ダメージカウンターに1つのダメージカウンターを入れます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
