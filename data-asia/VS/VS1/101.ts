import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ランスのアンファロス",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [181],
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				ja: "除去ビーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられた1つのエネルギーカードを捨てます。",
			},
			damage: 20,
		},
	],

	retreat: 3,

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
