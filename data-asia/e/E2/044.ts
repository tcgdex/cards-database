import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "ジンクス",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [124],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "瞑想します",
			},
			effect: {
				ja: "この攻撃は、ディフェンディングポケモンの各ダメージカウンターに対して10ダメージに加えて10ダメージを与えます。",
			},
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				ja: "レイを混乱させます",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
