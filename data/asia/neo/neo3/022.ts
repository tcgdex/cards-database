import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "輝くマジカルプ",
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
				ja: "ゴールドスケール",
			},
			effect: {
				ja: "対戦相手は2枚のカードを描くことができます。いずれにせよ、2枚のカードを描くことができます。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				ja: "ドラゴンボンド",
			},
			effect: {
				ja: "Gyarados、Dark Gyarados、またはShining Gyaradosという名前のカードを検索してください。それを相手に見せて、あなたの手に入れてください。その後、デッキをシャッフルします。",
			},
		},
	],

	retreat: 1,

};

export default card
