import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "エカン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [23],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "毒物",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
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
