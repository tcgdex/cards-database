import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "クラビー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [98],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "Irongrip",
			},
			damage: 10,
		},
		{
			cost: ["Water"],
			name: {
				ja: "昼寝",
			},
			effect: {
				ja: "Krabbyから2つのダメージカウンターを削除します（1つしかない場合は1を削除します）。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};
