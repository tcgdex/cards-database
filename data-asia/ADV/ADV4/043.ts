import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "ラントン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [171],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "エネルギー接地",
			},
			effect: {
				ja: "対戦相手のターン中に、ポカンのいずれかが相手の攻撃によってノックアウトされると、このパワーを使用できます。ノックアウトされたポケモンから捨てられた基本的なエネルギーカードを選択し、それをLanturnに取り付けます。ターンごとに1つ以上のエネルギー接地ポケを使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				ja: "落雷",
			},
			effect: {
				ja: "Lanturnに取り付けられたすべての稲妻エネルギーを捨てることができます。そうすれば、この攻撃の基本ダメージは50ではなく90です。",
			},
			damage: 50,
		},
	],

	retreat: 2,

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
