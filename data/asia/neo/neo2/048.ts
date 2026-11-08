import { Card } from "models/database/card"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Teddiursa",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [216],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "傷",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "昼寝時間",
			},
			effect: {
				'ja-jp': "Teddiursaからすべてのダメージカウンターを削除します。 Teddiursaは今眠っています。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
