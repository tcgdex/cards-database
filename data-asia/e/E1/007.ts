import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ポニータ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [77],
	hp: 40,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "シング",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スマッシュキック",
			},
			damage: 20,
		},
	],

	retreat: 1,

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
