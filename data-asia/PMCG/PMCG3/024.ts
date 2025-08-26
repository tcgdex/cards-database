import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ライチュ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [26],
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning", "Lightning"],
			name: {
				ja: "ギガショック",
			},
			effect: {
				ja: "対戦相手のベンチポケモンの3つを選択すると、この攻撃はそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）相手が3つ未満のベンチポケモンを持っている場合、それぞれにダメージを与えます。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
