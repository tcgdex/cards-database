import { Card } from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		ja: "カリザードスター（デルタ種）",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [6],
	hp: 90,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: {
				ja: "回転爪",
			},
			effect: {
				ja: "Charizard {{Star | This Pokemon}}に取り付けられたエネルギーカードを捨てることができます。そうした場合は、廃棄パイルを検索して、エネルギーカード（破棄したものを除く）を検索し、Charizard {{Star | This Pokemon}}に添付します。",
			},
			damage: 20,
		},
		{
			cost: ["Darkness", "Darkness", "Darkness", "Darkness", "Colorless"],
			name: {
				ja: "暗い渦巻き",
			},
			effect: {
				ja: "Charizard {{Star | This Pokemon}}に取り付けられたすべてのエネルギーカードを捨て、対戦相手のデッキからトップ3のカードを破棄します。",
			},
			damage: 150,
		},
	],

	retreat: 3,

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

export default card
