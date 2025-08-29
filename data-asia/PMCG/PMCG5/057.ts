import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "Surgeの槍中",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [21],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "旋風",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御ポケモンでそれを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "かみそりの風",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 40,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
