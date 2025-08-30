import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラチーニ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [147],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "ドラゴンデュー",
			},
			effect: {
				ja: "ポケモンの1つから2つのダメージカウンターを削除します（1つしかない場合は1を削除します）。",
			},
		},
		{
			cost: ["Lightning"],
			name: {
				ja: "テールスラップ",
			},
			damage: 10,
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
