import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "マッドキップ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [258],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "昼寝",
			},
			effect: {
				ja: "Mudkipから2つのダメージカウンターを削除します。",
			},
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "滝",
			},
			damage: 20,
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
