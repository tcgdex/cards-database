import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "ニドリーノ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [33],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "迅速な突進",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃には何もできず、このポケモンはそれ自体に20のダメージを与えます。",
			},
			damage: 60,
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
