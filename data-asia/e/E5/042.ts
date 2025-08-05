import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "ハンター",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [93],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "レイを混乱させます",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				ja: "影の手",
			},
			effect: {
				ja: "手から最大2枚のカードを捨てることができます。もしそうなら、その多くのカードを描きます。",
			},
			damage: 30,
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
			stamps: ["1st Edition"],
		},
	],
};
