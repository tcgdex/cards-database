import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "マイティエナ",
	},


	category: "Pokemon",
	dexId: [262],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "略奪",
			},
			effect: {
				ja: "ダメージを与える前に、防御ポケモンに取り付けられたすべてのトレーナーカードを捨ててください。",
			},
			damage: 30,
		},
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: {
				ja: "暗いバースト",
			},
			effect: {
				ja: "82が再生中の場合、この攻撃は50ダメージに加えて20ダメージを与えます。",
			},
		},
	],


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
