import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウィルのexeggutor",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [103],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "卵爆弾",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。テールの場合、この攻撃は何もしません、そして、ウィルのexeggutorはそれ自体に20のダメージを与えます。",
			},
			damage: 40,
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
