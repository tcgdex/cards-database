import { Card } from "models/database/card"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピッジット",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [17],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "旋風",
			},
			effect: {
				'ja-jp': "対戦相手がベンチでポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御するポケモンをそれで切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
			},
			damage: 20,
		},
	],


	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
