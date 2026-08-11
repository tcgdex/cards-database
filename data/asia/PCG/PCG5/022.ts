import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラプラス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [131],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "サポートナビゲーション",
			},
			effect: {
				'ja-jp': "ターン中にラプラスを手からベンチに置いたら、デッキをサポーターカードで検索し、相手に見せて、手に置くことができます。その後、デッキをシャッフルします。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				'ja-jp': "サーフィン",
			},
			damage: 30,
		},
	],

	retreat: 2,

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
