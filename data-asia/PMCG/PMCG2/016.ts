import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "Victreebel",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [71],
	hp: 80,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "ルアー",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合は、1つを選択して、アクティブなポケモンで切り替えます。",
			},

		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "酸",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に退却することはできません。",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants : [
		{
			type: "holo",
		},
	],
};

export default card
