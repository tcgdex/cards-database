import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "モーティのマークロー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [198],
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				ja: "誘惑します",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合は、それらの1つを選択し、防御ポケモンで切り替えます。防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "クラッチ",
			},
			effect: {
				ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
		},
	],
};

export default card
