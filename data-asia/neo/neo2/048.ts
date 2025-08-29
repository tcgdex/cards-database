import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "Teddiursa",
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
				ja: "傷",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "昼寝時間",
			},
			effect: {
				ja: "Teddiursaからすべてのダメージカウンターを削除します。 Teddiursaは今眠っています。",
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
