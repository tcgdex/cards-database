import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "催眠",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [97],
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "預言",
			},
			effect: {
				ja: "いずれかのプレイヤーのデッキの上部から最大3枚のカードを見て、好きなように再配置します。",
			},

		},
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: {
				ja: "暗い心",
			},
			effect: {
				ja: "対戦相手がベンチでポケモンを持っている場合は、1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
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
