import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "アノリス",
	},


	category: "Pokemon",
	dexId: [347],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "固体シェル",
			},
			effect: {
				ja: "攻撃によってアノリスに与えられた損傷は10倍に減少します（脱力と抵抗を適用した後）。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "フューリーカッター",
			},
			effect: {
				ja: "3コインをフリップします。そのうち1人がヘッドである場合、この攻撃は10ダメージに加えて10ダメージを与えます。そのうち2人がヘッドである場合、この攻撃は10ダメージに加えて30ダメージを与えます。それらのすべてがヘッドである場合、この攻撃は10ダメージに加えて50ダメージを与えます。",
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
