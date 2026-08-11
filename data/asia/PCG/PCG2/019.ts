import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴールデン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [118],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "超音速",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
		},
		{
			cost: ["Water"],
			name: {
				'ja-jp': "滝",
			},
			damage: 10,
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
