import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Suicune Star",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [245],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				'ja-jp': "スプラッシングターン",
			},
			effect: {
				'ja-jp': "1つのベンチポケモンを使用して、suicune {{star | this pokemon}}を切り替えます。",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Water", "Water"],
			name: {
				'ja-jp': "交差風",
			},
			effect: {
				'ja-jp': "対戦相手よりも賞品が少ない場合は、すべてのポケモンに取り付けられたすべてのエネルギーカードを捨ててください。",
			},
			damage: 70,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
