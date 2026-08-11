import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "フォークナーのpidgeot",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [18],
	hp: 60,
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
				ja: "クイックターン",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
		},
	],
};

export default card
