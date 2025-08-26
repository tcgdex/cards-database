import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "PoliWhirl",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [61],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "パンチ",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "バブルビーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 30,
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
