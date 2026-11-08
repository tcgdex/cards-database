import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ディグレット",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [50],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'ja-jp': "バロウ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、相手の次のターン中に攻撃によってDiglettへのすべての損害を防ぎます。 （攻撃の他の影響はまだ発生しています。）",
			},
			damage: 10,
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
			stamp: ["1st Edition"],
		},
	],
};

export default card
