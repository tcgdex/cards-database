import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Mareep",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [179],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "サンダーショック",
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
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
