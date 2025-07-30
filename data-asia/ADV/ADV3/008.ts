import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "slugma",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [218],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ラム",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "炎の誘惑",
			},
			effect: {
				ja: "対戦相手のベンチポケモンの1つを防御ポケモンの1つに切り替えます。対戦相手は、防御するポケモンを選択して切り替えます。新しい防御ポケモンが燃えています。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
