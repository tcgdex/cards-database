import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "輝くマジカルプ",
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [129],
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "ゴールドスケール",
			},
			effect: {
				'ja-jp': "対戦相手は2枚のカードを描くことができます。いずれにせよ、2枚のカードを描くことができます。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "ドラゴンボンド",
			},
			effect: {
				'ja-jp': "Gyarados、Dark Gyarados、またはShining Gyaradosという名前のカードを検索してください。それを相手に見せて、あなたの手に入れてください。その後、デッキをシャッフルします。",
			},
		},
	],

	retreat: 1,

};

export default card
