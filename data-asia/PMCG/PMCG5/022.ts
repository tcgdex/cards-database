import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ミスティのポリワグ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [60],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "泡",
			},
			effect: {
				ja: "コインをひっくり返します。テールの場合、次のターン中にこの攻撃を使用することはできません。",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Water"],
			name: {
				ja: "健忘症",
			},
			effect: {
				ja: "防御ポケモンの攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
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
