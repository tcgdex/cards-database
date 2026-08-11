import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "シャックル",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [213],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "撤回する",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、対戦相手の次のターン中に、すべてのダメージがシャックルするのを防ぎます。 （攻撃の他の影響はまだ発生しています。）",
			},
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "包む",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
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
