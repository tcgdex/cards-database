import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "シェルダー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [90],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "Irongrip",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "なめる",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
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
