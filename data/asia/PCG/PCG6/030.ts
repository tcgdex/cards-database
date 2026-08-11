import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Vaporeon（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [134],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "デルタ検索",
			},
			effect: {
				'ja-jp': "デッキを検索して、ホロンエネルギーカードを添付し、Vaporeonに添付してください。その後、デッキをシャッフルします。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Metal", "Colorless"],
			name: {
				'ja-jp': "戻り波",
			},
			effect: {
				'ja-jp': "Vaporeonに取り付けられたエネルギーカードを手に返すことができます。そうする場合は、防御ポケモンに取り付けられたエネルギーカードを選択し、相手の手に返します。",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
