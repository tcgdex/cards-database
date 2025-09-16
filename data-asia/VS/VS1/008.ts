import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "Bugsyの蝶",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [12],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "旋風",
			},
			effect: {
				ja: "コインをひっくり返します。頭と相手がベンチポケモンを持っている場合、対戦相手はそれらの1つを選択し、防御ポケモンでそれを切り替えます。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "PSYBEAM",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
