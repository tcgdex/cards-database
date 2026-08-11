import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "軽いサンフロラ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [192],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "反射した日光",
			},
			effect: {
				ja: "あなたの手から最大2匹の草のエネルギーカードをあなたの草のポケモンの1つに取り付けます。",
			},
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "SolarBeam",
			},
			damage: 40,
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
