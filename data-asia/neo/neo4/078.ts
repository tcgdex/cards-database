import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークドンファン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [232],
	hp: 60,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "Tusk Toss",
			},
			effect: {
				ja: "相手がベンチ付きポケモンを持っている場合は、コインをひっくり返します。頭の場合は、防御するポケモンとそれに取り付けられたすべてのカードを相手の手に返します。尾の場合、対戦相手はベンチ付きポケモンの1つを選択し、防御ポケモンで切り替えます。",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "巨大な牙",
			},
			damage: 50,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
