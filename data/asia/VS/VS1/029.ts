import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャスミンのエレクトアバズ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [125],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "パンチ",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Lightning"],
			name: {
				'ja-jp': "サンダージョルト",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。テールの場合、ジャスミンのエレクトアバズはそれ自体に10ダメージを与えます。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
