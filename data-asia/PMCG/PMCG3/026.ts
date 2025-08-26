import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ザプドス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [145],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning", "Lightning"],
			name: {
				ja: "雷雨",
			},
			effect: {
				ja: "対戦相手のベンチ付きポケモンごとに、コインをひっくり返します。頭の場合、この攻撃はそのポケモンに20のダメージを与えます。 （ベンチ付きポケモンに衰弱と抵抗を適用しないでください。）それから、ザプドスは尾の数の10ダメージ=それ自体に対して10回ダメージを与えます。",
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
