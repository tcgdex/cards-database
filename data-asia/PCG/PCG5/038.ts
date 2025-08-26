import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ガストリー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [92],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "なめる",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				ja: "スモッグ",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。",
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
