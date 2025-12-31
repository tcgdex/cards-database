import { Card } from "../../../interfaces"
import Set from "../E3"

const card: Card = {
	set: Set,
	name: {
		ja: "アンファロス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [181],
	hp: 100,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "サンダーショック",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				ja: "エネルギーを反映します",
			},
			effect: {
				ja: "ベンチ付きポケモンがあり、Ampharosに基本的なエネルギーカードが付いている場合は、それらのエネルギーカードの1つを取り、ポケモンの1つに取り付けます。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			subtype: "unlimited",
		}, {
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
