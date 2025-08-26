import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "猟犬-019/092",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [229],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "煙幕",
			},
			effect: {
				ja: "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "燃え尽きます",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合は、ハウズームに取り付けられたすべての消防型カードを捨ててください。",
			},
			damage: 60,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
