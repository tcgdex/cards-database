import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "ザプドス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [145],
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			name: {
				ja: "雷",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、Zapdosはそれ自体に30のダメージを与えます。",
			},
			damage: 60,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning", "Lightning"],
			name: {
				ja: "落雷",
			},
			effect: {
				ja: "Zapdosに取り付けられたすべてのエネルギーカードを廃棄するか、この攻撃は何もしません。",
			},
			damage: 100,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};
