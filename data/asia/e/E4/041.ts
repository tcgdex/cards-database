import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カダブラ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [64],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "悪夢",
			},
			effect: {
				'ja-jp': "防御ポケモンは今眠っています。",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				'ja-jp': "マインドショック",
			},
			effect: {
				'ja-jp': "衰弱と抵抗を適用しないでください。",
			},
			damage: 40,
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
