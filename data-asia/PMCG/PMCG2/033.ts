import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ライドン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [112],
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "ホーン攻撃",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Fighting", "Fighting", "Fighting"],
			name: {
				ja: "ラム",
			},
			effect: {
				ja: "Rhydonはそれ自体に20のダメージを与えます。対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。 （ポケモンを切り替える前にダメージを与えます。Rhydonがノックアウトされていても、ポケモンを切り替えてください。）",
			},
			damage: 50,
		},
	],

	retreat: 3,

	variants : [
		{
			type: "normal",
		},
	],
};

export default card
