import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ホイットニーのリキトゥン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [108],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "なめる",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "テールスラップ",
			},
			damage: 30,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
