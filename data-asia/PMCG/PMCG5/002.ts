import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカの奇妙な（lv.15）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [43],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "ブロット",
			},
			effect: {
				ja: "エリカの奇妙なダメージカウンターがある場合は、それらの1つを削除します。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "散発的なスポンジ",
			},
			effect: {
				ja: "ErikaのOddishにダメージカウンターがそれにある場合は、コインをひっくり返します。  ヘッドの場合、それらのダメージカウンターの1つを削除します。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
