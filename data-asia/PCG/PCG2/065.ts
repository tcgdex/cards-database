import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ラティアススター",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [380],
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "癒しの光",
			},
			effect: {
				ja: "各ポケモンから1つのダメージカウンターを削除します（{{star | this pokemon}}を含む）。",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Water", "Psychic"],
			name: {
				ja: "シューティングスター",
			},
			effect: {
				ja: "防御ポケモンがポケモン-Exの場合、ラティアスに取り付けられたすべてのエネルギーカードを破棄します{{star | this pokemon}}。この攻撃は50のダメージと100ダメージを与えます。",
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

export default card
