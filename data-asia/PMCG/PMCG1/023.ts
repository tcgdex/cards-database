import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "squirtle",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [7],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "バブル",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、相手のアクティブなポケモンが麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "撤回する",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、攻撃によってこのポケモンに与えられたすべてのダメージを防ぎます。",
			},

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
