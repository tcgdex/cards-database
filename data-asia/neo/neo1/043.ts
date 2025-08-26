import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "アンファロス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [181],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				ja: "GigaSpark",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンが麻痺し、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
