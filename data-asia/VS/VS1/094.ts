import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ロケットのライコウ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [243],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				ja: "上昇する雷",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は、相手のベンチポケモンの1つに20のダメージを与えます。尾の場合、この攻撃はベンチポケモンの1つに20のダメージを与えます。 （ベンチポケモンに衰弱や抵抗を適用しないでください。）",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
