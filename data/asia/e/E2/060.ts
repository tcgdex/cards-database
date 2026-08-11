import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "togepi",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [175],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "マイナーな用事が走る",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。各ヘッドについて、デッキを検索して基本的なエネルギーカードを探してください。それらのカードを相手に見せてから、それらを手に入れます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ポンド",
			},
			damage: 10,
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
