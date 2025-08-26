import { Card } from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "Snubbull",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [209],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "怖い顔",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、対戦相手の次の終わりまで、防御するポケモンは攻撃したり後退したりすることはできません。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "噛む",
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
