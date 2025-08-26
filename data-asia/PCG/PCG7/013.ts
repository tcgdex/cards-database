import { Card } from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		ja: "Bellossom（デルタ種）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [182],
	hp: 100,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "フェローシップ",
			},
			effect: {
				ja: "Bellossomは、すべての奇妙な、暗がり、vileplume、vileplume ex、またはあなたがプレイしている他のBellossomの攻撃を独自のものとして使用できます。 （各攻撃を使用するために必要なエネルギーが必要です。）",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "アクアフラワー",
			},
			effect: {
				ja: "対戦相手の次のターン中、Bellossomには弱点はありません。",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
