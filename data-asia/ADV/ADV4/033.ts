import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "clamperl",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [366],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "外骨格",
			},
			effect: {
				ja: "攻撃によるClamperlに与えられた損害は、衰弱と抵抗を適用した後）10倍に減少します。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "バブル",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
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
