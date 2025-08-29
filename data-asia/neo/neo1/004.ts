import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "スパラク",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [167],
	hp: 40,
	types: ["Grass"],
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
			cost: ["Grass"],
			name: {
				ja: "ストリングショット",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
