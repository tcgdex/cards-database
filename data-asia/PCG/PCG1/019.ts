import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "スキスター",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [123],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "リーフライド",
			},
			effect: {
				ja: "Scytherにエネルギーが付着している場合、Scytherのリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "フューリーカッター",
			},
			effect: {
				ja: "3コインをフリップします。そのうち1人がヘッドである場合、この攻撃は10ダメージに加えて10ダメージを与えます。そのうち2人がヘッドである場合、この攻撃は10ダメージに加えて20ダメージを与えます。それらのすべてがヘッドである場合、この攻撃は10ダメージに加えて40ダメージを与えます。",
			},
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
