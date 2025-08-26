import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "マグナイト",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [81],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ラム",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "スパーク",
			},
			effect: {
				ja: "対戦相手のベンチポケモンの1つに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 20,
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
			stamp: ["1st edition"],
		},
	],
};

export default card
