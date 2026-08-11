import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サンカーン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [191],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "マイナーな用事が走る",
			},
			effect: {
				'ja-jp': "デッキを検索して、基本的なエネルギーカードを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "ロールアウトする",
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
