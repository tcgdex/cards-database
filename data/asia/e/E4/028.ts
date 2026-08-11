import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オマニテ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [138],
	hp: 60,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "進化の水",
			},
			effect: {
				'ja-jp': "Omanyteに手からオマスターを置きます。これは進化するオマニテとしてカウントされます。",
			},
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				'ja-jp': "ドラッグします",
			},
			effect: {
				'ja-jp': "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンに切り替えることができます。",
			},
			damage: 20,
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
