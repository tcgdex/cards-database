import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "スカルモリー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [227],
	hp: 70,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Metal"],
			name: {
				ja: "選んでください",
			},
			effect: {
				ja: "相手の手のカードの数が少なくとも6人の場合は、手を見てください。相手が手に5枚のカードが残っていて、相手に自分のデッキに選んだカードをシャッフルさせるまで、そこにいくつかのカードを選択してください。",
			},
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "パワーカウント",
			},
			effect: {
				ja: "すべてのポケモンと相手のポケモンのすべてに取り付けられたエネルギーの量を数えます。ポケモンが相手のエネルギーよりもエネルギーが少ない場合、この攻撃は20ダメージに加えて30ダメージを与えます。",
			},
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
