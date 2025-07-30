import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "サンドスラッシュ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [28],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "サンドトラップ",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合は、最大2つのポケモンを選択します。この攻撃は、それぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "毒針ラッシュ",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。少なくとも1つの頭を手に入れた場合、防御するポケモンは毒されます。",
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
