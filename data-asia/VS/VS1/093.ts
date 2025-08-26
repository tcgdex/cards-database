import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ロケットのウォブバッフェット",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [202],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "不器用な攻撃",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃には何もせず、ポケモンの1つに30ダメージを与えます。 （弱さや抵抗を適用しないでください。）",
			},
			damage: 30,
		},
	],

	retreat: 2,

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
