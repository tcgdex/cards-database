import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ウィルのジンクス",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [124],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "催眠",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "瞑想します",
			},
			effect: {
				ja: "この攻撃は、ディフェンディングポケモンの各ダメージカウンターに対して10ダメージに加えて10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

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
