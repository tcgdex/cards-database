import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いマチャンプ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [68],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "メガパンチ",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			name: {
				ja: "逃げる",
			},
			effect: {
				ja: "あなたの対戦相手は彼または彼女のアクティブなポケモンとそれに取り付けられたすべてのカードを彼または彼女のデッキにシャッフルします。対戦相手にベンチポケモンがない場合、この攻撃は使用できません。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
