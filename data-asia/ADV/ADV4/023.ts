import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "コルサラ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [222],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "サンゴの輝き",
			},
			effect: {
				ja: "相手の基本的なポケモンの数まで多くのカードを描きます。  （この方法で10枚以上のカードを手に入れることはできません。）",
			},
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "サーフィン",
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
	],
};
