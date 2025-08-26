import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "quagsire",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [195],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "泥の平手打ち",
			},
			damage: 30,
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "渦",
			},
			effect: {
				ja: "防御するポケモンにエネルギーカードが接続されている場合は、それらの1つを選択して破棄します。",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
