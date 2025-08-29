import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "Bayleef",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [153],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "甘い香り",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドとポケモンのいずれかがダメージカウンターにそれらにある場合、それらの1つから2つのダメージカウンターを削除します（または1つしかない場合は1つ）。テールと対戦相手のポケモンのいずれかがダメージカウンターにそれらを持っている場合、それらの1つを選択し、そこから2つのダメージカウンターを削除します（または1つしかない場合）。",
			},
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "ダブルレザーの葉",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
