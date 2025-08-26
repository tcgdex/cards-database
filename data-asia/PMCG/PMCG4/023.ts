import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークバポレオン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [134],
	hp: 60,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "噛む",
			},
			damage: 30,
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "渦",
			},
			effect: {
				ja: "防御するポケモンにエネルギーカードが接続されている場合は、それらの1つを選択して破棄します。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
