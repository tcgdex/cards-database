import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "staryu",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [120],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "コアガード",
			},
			effect: {
				ja: "Staryuに精神的なエネルギーが付着している場合、攻撃によってStaryuに与えられた損傷は10増加します（脱力と抵抗を適用した後）。",
			},
		}],

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "ポンド",
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

export default card
