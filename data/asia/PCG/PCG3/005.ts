import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レディバ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [165],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "家族を呼びます",
			},
			effect: {
				'ja-jp': "デッキを検索して、基本的なポケモンを草にして、ベンチに置きます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "ビート",
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
