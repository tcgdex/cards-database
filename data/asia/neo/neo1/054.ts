import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "ドンファン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [232],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "フレイル",
			},
			effect: {
				ja: "ダメージ数がドンファンのダメージ数を10回ダメージします。",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Fighting"],
			name: {
				ja: "急速なスピン",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、アクティブなポケモンでそれを切り替え、ベンチポケモンをお持ちの場合は、アクティブなポケモンで1つを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
			},
			damage: 50,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
