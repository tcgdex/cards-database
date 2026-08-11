import { Card } from "models/database/card"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "電極",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [101],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Lightning"],
			name: {
				'ja-jp': "Sonicboom",
			},
			effect: {
				'ja-jp': "この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
			},
			damage: 30,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				'ja-jp': "エネルギースパイク",
			},
			effect: {
				'ja-jp': "デッキを検索して、基本的なエネルギーカードを検索し、ポケモンの1枚に添付してください。その後、デッキをシャッフルします。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
