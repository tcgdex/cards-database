import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いマチョーク",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [67],
	hp: 60,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "ドラッグします",
			},
			effect: {
				ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンに切り替えます。新しい防御ポケモンにダメージを与えます。対戦相手にベンチポケモンがない場合、この攻撃は使用できません。",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "ノックバック",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御ポケモンでそれを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
