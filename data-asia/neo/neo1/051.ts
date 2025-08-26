import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "sudowoodo",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [185],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "フレイル",
			},
			effect: {
				ja: "ダメージ数のダメージ数は、sudowoodoのダメージ数をカウンターします。",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "ロックスロー",
			},
			damage: 30,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
