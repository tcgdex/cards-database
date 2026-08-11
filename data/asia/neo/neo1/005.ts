import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホッピップ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [187],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ホップ",
			},
			damage: 10,
		},
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "芽",
			},
			effect: {
				'ja-jp': "デッキを検索して、ホッピップという名前の基本的なポケモンを探して、ベンチに置きます。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
