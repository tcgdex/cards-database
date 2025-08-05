import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "forretress",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [205],
	hp: 70,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スピニングブロー",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。両方のコインがヘッドである場合は、ベンチ付きポケモンの1つを使用してforretressを切り替えます。",
			},
		},
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: {
				ja: "散布骨",
			},
			effect: {
				ja: "2つのコインをフリップします。各ヘッドについて、相手のベンチポケモンのそれぞれに10ダメージを与えます。各尾で、自分のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
