import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "ニドリーナ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [30],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "毒爪",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st Edition"],
		},
	],
};

export default card
