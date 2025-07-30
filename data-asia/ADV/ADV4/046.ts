import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "シュペット",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [353],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "シャドウクラッシュ",
			},
			effect: {
				ja: "Shuppetに取り付けられた1つのサイキックエネルギーカードを捨てることができます。もしそうなら、相手は防御ポケモンに取り付けられた1つのエネルギーカードを破棄します。",
			},
			damage: 10,
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
