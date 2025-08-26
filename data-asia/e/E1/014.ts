import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "qwilfish",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [211],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Water"],
			name: {
				ja: "スタンニードル",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
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
